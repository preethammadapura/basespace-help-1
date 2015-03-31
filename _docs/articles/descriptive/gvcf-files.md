---
layout: article
title: gVCF files
---

##Introduction

###What is it
This application also produces the Genome Variant Call Format file (gVCF). gVCF was developed to store sequencing information for both variant and non-variant positions, which is required for human clinical applications. gVCF is a set of conventions applied to the standard variant call format (VCF) 4.1 as documented by the 1000 Genomes Project. These conventions allow representation of genotype, annotation, and other information across all sites in the genome in a compact format. Typical human whole-genome sequencing results expressed in gVCF with annotation are less than 1 Gbyte, or about 1/100 the size of the BAM file used for variant calling. If you are performing targeted sequencing, gVCF is also an appropriate choice to represent and compress the results.

gVCF is a text file format, stored as a gzip compressed file (*.genome.vcf.gz). Compression is further achieved by joining contiguous non-variant regions with similar properties into single ‘block’ VCF records. To maximize the utility of gVCF, especially for high stringency applications, the properties of the compressed blocks are conservative. Block properties like depth and genotype quality reflect the minimum of any site in the block. The gVCF file can be indexed (creating a *.tbi file) and used with existing VCF tools such as tabix and IGV, making it convenient both for direct interpretation and as a starting point for tertiary analysis.

For more information, [click here](https://sites.google.com/site/gvcftools/home/about-gvcf).

###When to use it
Use it for direct interpretation or as a starting point for tertiary analysis with downstream analysis that is compatible with gVCF, such as tabix and IGV.

###When not to use it
Do not use it with tools that are not compatible with the gVCF format.

###How to use it
Apps that use gVCF files find it when kicked off and directed to the sample. If using gVCF files in other tools, download the file to use it in the outside tool.

---

##Detailed Description
The following conventions are used in the variant caller gVCF files.

###Samples per file
There is only one sample per gVCF file.

###Non-Variant Blocks Using END Key
Contiguous non-variant segments of the genome can be represented as single records in gVCF. These records use the standard 'END' INFO key to indicate the extent of the record. Even though the record can span multiple bases, only the first base is provided in the REF field to reduce file size.

The following is a simplified segment of a gVCF file, describing a segment of non-variant calls (starting with an A) on chromosome 1 from position 51845 to 51862.
	
	##INFO=<ID=END,Number=1,Type=Integer,Description="End position of the variant described in this record">#CHROM POS ID REF ALT QUAL FILTER INFO FORMAT NA19238chr1 51845 . A . . PASS END=51862

Any field provided for a block of sites, such as read depth (using the DP key), shows the minimum value that is observed among all sites encompassed by the block. Each sample value shown for the block, such as the depth (DP), is restricted to a range where the maximum value is within 30% or 3 of the minimum. For example, for sample value range [x,y], y <= x+max(3,x*0.3). This range restriction applies to each of the sample values printed in the final block record.

---
###Indel Regions
Sites that are "filled in" inside of deletions have additional changes:

All deletions:

- Sites inside of any deletion are marked with the deletion filters, in addition to any filters that have already been applied to the site.
- Sites inside of deletions cannot have a genotype or alternate allele quality score higher than the corresponding value from the enclosig indel.

Heterozygous deletions:

- Sites inside of heterozygous deletions are altered to have haploid genotype entries (e.g. "0" instead of "0/0", "1" instead of "1/1").
- Heterozygous SNV calls inside of heterozygous deletions are marked with the "SiteConflict" filter and their genotype is unchanged.

Homozygous deletions:

- Homozygous reference and no-call sites inside of homozygous deletions have genotype "."
- Sites inside of homozygous deletions that have a non-reference genotype are marked with a “SiteConflict” filter, and their genotype is unchanged.
- Site and genotype quality are set to "."

The described modifications reflect the notion that the site confidence is bound within the enclosing indel confidence.
On occasion, the variant caller produces multiple overlapping indel calls that cannot be resolved into two haplotypes. If this case, all indels and sites in the region of the overlap are marked with the IndelConflict filter.

---
###Genotype Quality for Variant and Non-variant Sites
The gVCF file uses an adapted version of genotype quality for variant and non-variant site filtration. This value is associated with the key GQX. The GQX value is intended to represent the minimum of {Phred genotype quality assuming the site is variant, Phred genotype quality assuming the site is non-variant}. The reason for using this value is to allow a single value to be used as the primary quality filter for both variant and non-variant sites. Filtering on this value corresponds to a conservative assumption appropriate for applications where reference genotype calls must be determined at the same stringency as variant genotypes, i.e.:

- An assertion that a site is homozygous reference at GQX >= 30 is made assuming the site is variant.
- An assertion that a site is a non-reference genotype at GQX >= 30 is made assuming the site is non-variant.

---
###Section Descriptions
The gVCF file contains the following sections:

- Meta-information lines start with ## and contain metadata, config information, and define the values that the INFO, FILTER, and FORMAT fields can have.
- The header line starts with # and names the fields that the data lines use. These fields are #CHROM, POS, ID, REF, ALT, QUAL, FILTER, INFO, FORMAT, followed by one or more sample columns.
- Data lines that contain information about one or more positions in the genome.
If you extract the variant lines from a gVCF file, you produce a conventional variant VCF file.

---
###Field Descriptions
The fixed fields #CHROM, POS, ID, REF, ALT, QUAL are defined in the VCF 4.1 standard provided by the 1000 Genomes Project. The fields ID, INFO, FORMAT, and sample are described in the meta-information.

- **CHROM**: Chromosome: an identifier from the reference genome or an angle-bracketed ID String ("<ID>") pointing to a contig.
- **POS**: Position: The reference position, with the first base having position 1. Positions are sorted numerically, in increasing order, within each reference sequence CHROM. There can be multiple records with the same POS. Telomeres are indicated by using positions 0 or N+1, where N is the length of the corresponding chromosome or contig.
- **ID**: Semi-colon separated list of unique identifiers where available. If this ID is a dbSNP variant, it is encouraged to use the rs number. No identifier is present in more than one data record. If there is no identifier available, then the missing value is used.
- **REF**: Reference bases: A,C,G,T,N; there can be multiple bases. The value in the POS field refers to the position of the first base in the string. For simple insertions and deletions in which either the REF or one of the ALT alleles would otherwise be null/empty, the REF and ALT strings include the base before the event. This modification is reflected in the POS field. The exception is when the event occurs at position 1 on the contig, in which case they include the base after the event. If any of the ALT alleles is a symbolic allele (an angle-bracketed ID String "<ID>"), the padding base is required. In that case, POS denotes the coordinate of the base preceding the polymorphism.
- **ALT**: Comma-separated list of alternate non-reference alleles called on at least one of the samples. Options are:
	- Base strings made up of the bases A,C,G,T,N
	- Angle-bracketed ID String (”<ID>”)
	- Break-end replacement string as described in the section on break-ends.
If there are no alternative alleles, then the missing value is used.
- **QUAL**: Phred-scaled quality score for the assertion made in ALT. i.e. -10log_10 probability (call in ALT is wrong). If ALT is ”.” (no variant), this score is -10log_10 p(variant). If ALT is not ”.”, this score is -10log_10 p(no variant). High QUAL scores indicate high confidence calls. Although traditionally people use integer Phred scores, this field is permitted to be a floating point to enable higher resolution for low confidence calls if desired. If unknown, the missing value is specified. (Numeric)
- **FILTER**: PASS if this position has passed all filters, i.e. a call is made at this position. Otherwise, if the site has not passed all filters, a semicolon-separated list of codes for filters that fail. gVCF files use the following values:
	- _PASS_: position has passed all filters.
	- _IndelConflict_: Locus is in region with conflicting indel calls.
	- _SiteConflict_: Site genotype conflicts with proximal indel call, which is typically a heterozygous SNV call made inside of a heterozygous deletion.
	- _LowGQX_: Locus GQX (minimum of {Genotype quality assuming variant position,Genotype quality assuming non-variant position}) is less than 30 or not present.
	- _HighDPFRatio_: The fraction of base calls filtered out at a site is greater than 0.3.
	- _HighSNVSB_: SNV strand bias value (SNVSB) exceeds 10. High strand bias indicates a potential high false-positive rate for SNVs.
	- _HighSNVHPOL_: SNV contextual homopolymer length (SNVHPOL) exceeds 6.
	- _HighREFREP_: Indel contains an allele that occurs in a homopolymer or dinucleotide track with a reference repeat greater than 8.
	- _HighDepth_: Locus depth is greater than 3x the mean chromosome depth.
- **INFO**: Additional information. INFO fields are encoded as a semicolon-separated series of short keys with optional values in the format: <key>=<data>[,data]. gVCF files use the following values:
	- _END_: End position of the region described in this record.
	- *BLOCKAVG_min30p3a*: Non-variant site block. All sites in a block are constrained to be non-variant, have the same filter value, and have all sample values in range [x,y], y <= max(x+3,(x*1.3)). All printed site block sample values are the minimum observed in the region spanned by the block.
	- _SNVSB_: SNV site strand bias.
	- _SNVHPOL_: SNV contextual homopolymer length.
	- _CIGAR_: CIGAR alignment for each alternate indel allele.
	- _RU_: Smallest repeating sequence unit extended or contracted in the indel allele relative to the reference. If longer than 20 bases, RUs are not reported.
	- _REFREP_: Number of times RU is repeated in reference.
	- _IDREP_: Number of times RU is repeated in indel allele.
- **FORMAT**: Format of the sample field. FORMAT specifies the data types and order of the subfields. gVCF files use the following values:
	- _GT_: Genotype.
	- _GQ_: Genotype Quality.
	- _GQX_: Minimum of {Genotype quality assuming variant position, Genotype quality assuming non-variant position}.
	- _DP_: Filtered base call depth used for site genotyping.
	- _DPF_: Base calls filtered from input before site genotyping.
	- _AD_: Allelic depths for the ref and alt alleles in the order listed. For indels, this value only includes reads that confidently support each allele (posterior probability 0.999 or higher that read contains indicated allele vs all other intersecting indel alleles).
	- _DPI_: Read depth associated with indel, taken from the site preceding the indel.
- **SAMPLE**: Sample fields as defined by the header.
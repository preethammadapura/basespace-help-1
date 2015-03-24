---
layout: article
title: BaseSpace Workflow Model
hide_welcome_banner: true
---
-----------------------
# Workflow Model
In BaseSpace, there are two major workflows that you may become accustomed to:

1. Prepping a Run in BaseSpace
2. Processing Data and Analysis in BaseSpace

## Prep a Run in BaseSpace

**This feature is currently only available for Runs on the NextSeq instrument.**

BaseSpace enables you to prep runs for sequencing on NextSeq instruments.

The prep workflow in BaseSpace consists of four steps:

* **Biological Samples**: Define the samples that are going to be sequenced.
* **Libraries**: Define the libraries, which consist of biological samples that are prepped and contain adapters. Each library usually derives from a single biological sample, though biological samples can be used in multiple libraries.
* **Pools**: Group libraries into pools that share analysis parameters. Pools can consist of one or multiple libraries.
* **Planned Runs**: Define run parameters for pool, then send planned run to the NextSeq.

You can now start the run from the instrument once these four steps are completed within BaseSpace, you will simply have to log in to the NextSeq instrument using your BaseSpace credentials.

**Figure 1 Prep Workflow**

{% screenshot /images/articles/prep-workflow-model.png %} 

## Processing Data and Analysis in BaseSpace

Processing a flow cell on a sequencing instrument produces various files, collectively referred to as a run. A run contains log files, instrument health data, run metrics, sample sheet, and base call information (*.bcl files). The base call information is demultiplexed in BaseSpace to create the samples used in secondary analysis.

Samples are analyzed automatically using the Illumina workflow apps as specified in the sample sheet, or by launching custom BaseSpace apps. BaseSpace apps are processing software and routines that interact with BaseSpace data through the API. User-level authentication and in-flight data encryption are enforced for every app that requests access to BaseSpace data.

The result files from an app session are stored in an analysis. Analyses are created to record every time an app is launched. For example, when a resequencing app executes alignment and variant calling, an analysis is created that contains the app results for each sample. App results generally contain BAM and VCF files, but they can also contain other file types. App results can also be used as inputs to apps.

Finally, projects are simple containers that store samples and analyses.

**Figure 2 BaseSpace Data Model and Workflow**

{% screenshot /images/articles/app-workflow-model.png %} 
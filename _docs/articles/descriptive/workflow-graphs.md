---
layout: article
title: Instrument/Sample-Sheet Workflow Graphs
---

The workflow graphs provide metrics that allow you to judge the success of the sequencing run for that sample. The following topics provide information about these charts.

---
##Low Percentage Graph

###What is it
The workflow graphs provide metrics that allow you to judge the success of the sequencing run for that sample. The following topics provide information about these charts.
{% screenshot /images/articles/prep-tab_121x128.png %}
You can expand a chart by clicking the expand button at the top right corner. 

###When to use it
Use the Low Percentage Graph to judge sequencing metrics for a sample. This graph can also be used when troubleshooting unexpected results.

###When not to use it
This graph is not a good predictor of yields or quality of final results.

###How to use it
<table border="1">
	<tr>
		<th>Metric</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Phasing 1</td>
		<td>The percentage of molecules in a cluster that fall behind the current cycle within Read 1.</td>
	</tr>
	<tr>
		<td>Phasing 2</td>
		<td>The percentage of molecules in a cluster that fall behind the current cycle within Read 2.</td>
	</tr>
	<tr>
		<td>PrePhasing 1</td>
		<td>The percentage of molecules in a cluster that run ahead of the current cycle within Read 1.</td>
	</tr>
	<tr>
		<td>PrePhasing 2</td>
		<td>The percentage of molecules in a cluster that run ahead of the current cycle within Read 2.</td>
	</tr>
	<tr>
		<td>Mismatch 1</td>
		<td>The average percentage of mismatches for Read 1 over all cycles.</td>
	</tr>
	<tr>
		<td>Mismatch 2</td>
		<td>The average percentage of mismatches for Read 2 over all cycles.</td>
	</tr>
</table>

---

##High Percentage Graph

###What is it
The High Percentage Graph represents run statistics that are generally near 100% in an ideal run. These graphs are metrics of the sequencing run or the analysis step.
{% screenshot /images/articles/prep-tab_121x128.png %}
You can expand a chart by clicking the expand button at the top right corner. 

###When to use it
Use the High Percentage Graph to judge sequencing metrics for a sample. This graph can also be used when troubleshooting unexpected results.

###When not to use it
Do not use the High Percentage Graph to look at tertiary analysis metrics.

###How to use it
<table border="1">
	<tr>
		<th>Metric</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>|20/|1 1</td>
		<td>The ratio of intensities at cycle 20 to the intensities at cycle 1 for Read 1.</td>
	</tr>
	<tr>
		<td>|20/|1 2</td>
		<td>The ratio of intensities at cycle 20 to the intensities at cycle 1 for Read 2.</td>
	</tr>
	<tr>
		<td>Align 1</td>
		<td>The percentage of clusters that aligned to the reference in Read 1.</td>
	</tr>
	<tr>
		<td>Align 2</td>
		<td>The percentage of clusters that aligned to the reference in Read 2.</td>
	</tr>
	<tr>
		<td>PE Orienation</td>
		<td>The percentage of paired-end alignments with the expected orientation.</td>
	</tr>
	<tr>
		<td>PE Resynthesis</td>
		<td>The ratio of first cycle intensities for Read 1 to first cycle intensities for Read 2.</td>
	</tr>
	<tr>
		<td>PF</td>
		<td>The percentage of clusters passing filters.</td>
	</tr>
</table>

---

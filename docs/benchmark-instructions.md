# Benchmark instructions
## Quickstart

To reproduce and obtain the results presented in the paper, follow these steps. While the process is similar for synthetic and real datasets, there are some differences in specific steps.

### Synthetic

#### Benchmark

> The benchmark results are available for download on Seafile: [Online Results](https://seafile.lirmm.fr/d/b44a34bda6734348b2d5/) and [Offline Results](https://seafile.lirmm.fr/d/04d94e91e5114a31933c/).

To benchmark synthetic data, visit [observablehq/Synthetic](https://observablehq.com/d/bbe2ffd9be68d2d5). This platform allows you to generate results and requires an internet connection.

![Synthetic Benchmark Interface](synthetic_benchmark_options.png)


1. **Selection of Algorithms**: Identify the algorithms for which benchmark data is to be generated. While multiple algorithms can be selected simultaneously, this may result in browser instability or crashes when processing large datasets. We therefore recommend proceeding cautiously and, if necessary, executing algorithms sequentially.
2. **Specification of Iterations per Sample**: Define the number of iterations to perform per sample. Increasing this number generates multiple instances of the same sample, which can provide more robust runtime statistics but increases computational time. For a single evaluation of the selected algorithm, set this value to 1.
3. **Configuration Selection**: Choose the experimental configurations to execute. By default, all configurations are selected; however, selective execution may be preferable to manage memory consumption and execution time on large datasets.
4. **Execution of the Benchmark**: Once the algorithms, iterations, and configurations have been specified, initiate the benchmarking procedure by enabling the "start" checkbox. Progress is reported in real-time, allowing monitoring of the execution.
5. **Retrieval of Results**: Upon completion, export the `benchmark` variable in JSON format. Files should be placed in the appropriate directories (`results/online` for online algorithms, `results/offline` for offline algorithms). Ensure that these directories exist prior to exporting the results to avoid inconsistencies.

    <video controls src="export_results.mp4" title="Title"></video>
6. **Resetting the Benchmark Environment**: Prior to initiating a new benchmarking procedure or switching configurations, employ the reset function to clear all accumulated results. This prevents contamination of subsequent runs with data from previous executions.


**Tips for Handling Large Configurations**:

- For large `qte` values (>12,800), select one configuration at a time. Reset results after each download.
- Run one algorithm at a time when dealing with large datasets.
- To resume a long process from a specific sample, adjust the "sample n°" cursor, reset results, then check "start" to continue.

    ![select custom sample](select_sample.png)

If the algorithm name starts with "offline," save the JSON in `results/offline`. Otherwise, save it in `results/online`. Ensure both folders exist before saving.

---

#### Results Folder Structure and Format

Benchmark results must be stored using the following structure:

```
results/
  online/
    *.json
  offline/
    *.json
```

> **Notes:**
>
> - Multiple JSON files can coexist in each folder.
> - All files are automatically loaded and concatenated by the notebooks using Pandas.
> - Filenames do not matter, but all JSON files in the folder are included.
> - Malformed files may cause notebook execution to fail.

---

#### Reproducibility Goal

The goal is to exactly reproduce the results and figures presented in the paper:

- Online vs Offline performance comparisons.
- Runtime and scalability analysis on synthetic datasets.
- Visualization plots generated from benchmark results.

All synthetic data generation and benchmarking procedures are **seeded**. When using the same software and configurations, results are deterministic and identical across runs.

Reproduction is considered successful when:

1. JSON files are correctly stored in `results/online` and `results/offline`.
2. Visualization notebooks execute without errors.
3. Generated plots match the paper’s figures (same curves and numerical values).

If discrepancies occur, they are most likely caused by differences in software versions or execution environments.

---

#### Visualisation

> Notebook renders are available on Nbviewer: [Online Notebook](https://nbviewer.org/urls/seafile.lirmm.fr/f/025f23492986484795bf/%3Fraw%3D1) and [Offline Notebook](https://nbviewer.org/urls/seafile.lirmm.fr/f/a7cafa3fcf47487a9dcf/%3Fraw%3D1).

Requirements:

- Python (tested with 3.10+)
- Libraries: `nbconvert`, `pandas`, `scikit-learn`, `numpy`, `seaborn`, `matplotlib`

Recommended: create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

pip install nbconvert pandas scikit-learn numpy seaborn matplotlib
```

Place the notebooks (`result-visualisation-online.ipynb` and `result-visualisation-offline.ipynb`) in the same directory as `results/`.

- [Download `result-visualisation-online.ipynb`](https://seafile.lirmm.fr/f/025f23492986484795bf/)
- [Download `result-visualisation-offline.ipynb`](https://seafile.lirmm.fr/f/a7cafa3fcf47487a9dcf/)

Create an `images/` folder to store generated plots.

Execute the notebooks without opening a browser:

```bash
jupyter nbconvert --to notebook --execute result-visualisation-online.ipynb --inplace
jupyter nbconvert --to notebook --execute result-visualisation-offline.ipynb --inplace
```

The notebooks will automatically retrieve data from `results/online` and `results/offline` and generate the plots.

### Real Datasets

The real datasets used in this project are prepared via dedicated Observable notebooks. These notebooks handle all preprocessing, cleaning, and structuring of the data into the required format for benchmarking.

The following notebooks provide the dataset preparation workflows:

- [Siprojuris Dataset](https://observablehq.com/@stardisblue/siprojuris-dataset)
- [Siprojuris Localisation Dataset](https://observablehq.com/@stardisblue/siprojuris-localisation-dataset)
- [Risse Dataset](https://observablehq.com/@stardisblue/castermans-risse-dataset)
- [Italian Renaissance Architecture Dataset](https://observablehq.com/@stardisblue/castermans-italian-renaissance-architecture-dataset)
- [Trove Dataset](https://observablehq.com/@stardisblue/castermans-trove-dataset)
- [Glottovis Dataset](https://observablehq.com/@stardisblue/castermans-glottovis-dataset)
- [OCS Wrecks, Coastal Scale Dataset](https://observablehq.com/@stardisblue/ocs-wrecks-coastal-scale-dataset)


#### Benchmark

> The benchmark for real datasets is executed via the [Benchmark Primer](https://observablehq.com/@stardisblue/benchmark-primer) notebook. This notebook automatically imports the datasets from the preparation notebooks listed above and runs the benchmark interactively.

To run a benchmark on real datasets:

![Real benchmark options](real_benchmark_options.png)

1. **Select Algorithms**: Use the checkbox list to choose one or multiple algorithms.
    - If an algorithm type is **offline**, the notebook automatically selects the offline version of the dataset.
    - Selecting multiple algorithms is possible but may increase execution time and can lead to crashes.

2. **Select Datasets**: Choose one or multiple real datasets from the checkbox list.
    - The corresponding datasets are imported automatically from their preparation notebooks.

3. **Set Iterations**: Specify the number of iterations for benchmarking execution time.
    - Each iteration produces the full benchmark results for the same configuration.
    - The only variable that changes between iterations is the execution time.
    - This allows measuring runtime statistics (mean/median) without affecting the benchmark results themselves.
    - Default is 1 iteration.

> **Note:**
> - Once the algorithm(s) and dataset(s) are selected, the benchmark is executed **automatically**; there is no separate “start” button.
> - At the end of the execution, the **`results` variable** contains all benchmark results. Users should **download this variable in JSON format** to save the data.
>
>    ![results variable](real_benchmark_export.png)
> - Users do **not** need to download any files manually beforehand.
> - All preprocessing, data import, and benchmark calculations are handled automatically by the notebook.
> - Inspecting the dataset notebooks is optional and useful only for understanding the preprocessing workflow.

**Tips for Interactive Usage**:

- For long-running experiments, select one algorithm or dataset at a time to minimize waiting.


#### Results Analysis

> Results for real datasets are analyzed using the [Benchmark Results](https://observablehq.com/@stardisblue/benchmark-results) notebook.

Workflow:

1. After running the Benchmark Primer, **download the `results` variable** in JSON format.
2. In the Benchmark Results notebook, **import all JSON files** using Observable's `FileAttachment`. The notebook aggregates them into the variable `alternating`, which contains all benchmark results:

    ![benchark results](benchmark_results.png)
3. The notebook automatically processes `alternating` to generate summary metrics and reproduce the outputs shown in the paper.


> **Notes on Reproducibility:**
>
> - **Validation of published results:** Users can directly use the exported JSON files. No fork or re-execution of preparation notebooks is needed.
> - **Full reproduction with custom datasets:** To rerun the benchmark with downloaded datasets that are different from the original, users must fork the preparation notebooks and run the forked **Benchmark Primer** notebook.

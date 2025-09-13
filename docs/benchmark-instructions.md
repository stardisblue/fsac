# Benchmark instructions

## Quickstart

To reproduce and obtain the results presented in the paper, follow these steps. While the process is similar for synthetic and real datasets, there are some differences in specific steps.

### Synthetic

#### Benchmark

> The benchmark results are available for download on Seafile: [Online Results](https://seafile.lirmm.fr/d/b44a34bda6734348b2d5/) and [Offline Results](https://seafile.lirmm.fr/d/04d94e91e5114a31933c/).

To benchmark synthetic data, visit [observablehq/Synthetic](https://observablehq.com/d/bbe2ffd9be68d2d5). This platform allows you to generate results and requires an internet connection.

1. **Select Algorithms**: Choose the algorithms you want to generate data for. While selecting multiple algorithms is possible, it may lead to crashes, so proceed with caution.
2. **Set Iterations per Sample**: Specify the number of iterations per sample. This determines the execution time by generating multiple occurrences of the same sample. If you only need the result for the selected algorithm, set this value to 1.
3. **Choose Configurations**: Select the configurations you want to run. By default, all configurations are selected, though you can adjust this as needed.
4. **Start the Process**: After setting your parameters, check the "start" checkbox to begin. The process will run with the selected settings, and progress updates will be displayed in real-time.
5. **Download Results**: Once the process is complete, download the results in JSON format by exporting the `benchmark` variable.
6. **Reset Results**: Use the reset button to clear accumulated results before starting a new process.

**Tips for Handling Large Configurations**:

- When working with large `qte` values (greater than 12,800), it’s recommended to select one configuration at a time. After downloading the data, reset the results and proceed with the next configuration.
- To minimize the risk of crashes, run one algorithm at a time when dealing with large datasets.
- For very large configurations, restarting the process from a specific variant can be helpful. Scroll down and adjust the "sample n°" cursor to set the starting point for the desired configuration. Make sure to reset the results first, and once the starting point is adjusted, check the "start" checkbox to resume the process.

If the selected algorithm name begins with "offline," save the downloaded JSON file in the `results/offline` folder. Otherwise, save it in the `results/online` folder. Before doing this, ensure that both the `results/offline` and `results/online` folders are created. The name of the downloaded file is not important, but keep in mind that downloading benchmark results may overwrite existing files.

#### Visualisation

> Notebook renders are available on Nbviewer: [Online Notebook](https://nbviewer.org/urls/seafile.lirmm.fr/f/025f23492986484795bf/%3Fraw%3D1) and [Offline Notebook](https://nbviewer.org/urls/seafile.lirmm.fr/f/a7cafa3fcf47487a9dcf/%3Fraw%3D1).

For this step, you will need Python installed.

You will also need the following Python libraries: `nbconvert`, `pandas`, `scikit-learn`, `numpy`, `seaborn`, and `matplotlib`.

It is recommended to use a virtual environment. To create one and install the required libraries, run:

```bash
python -m venv venv
source venv/bin/activate   # On Linux/Mac
venv\Scripts\activate      # On Windows

pip install nbconvert pandas scikit-learn numpy seaborn matplotlib
```

Once the results have been generated and saved in their respective folders, download the Jupyter notebooks used to create the plots. Place these notebooks in the same directory as the `results` folder.

Two notebooks are available: `result-visualisation-online.ipynb` for online results and `result-visualisation-offline.ipynb` for offline results. You can download them here: [Online Notebook](https://seafile.lirmm.fr/f/025f23492986484795bf/) and [Offline Notebook](https://seafile.lirmm.fr/f/a7cafa3fcf47487a9dcf/).

Create an `images` folder to store the generated plots.

Once the folder is ready, run the notebooks without opening a web browser by using:

```bash
jupyter nbconvert --to notebook --execute result-visualisation-online.ipynb --inplace
jupyter nbconvert --to notebook --execute result-visualisation-offline.ipynb --inplace
```

These commands execute all cells in the notebooks and save the outputs directly into the same files.

The notebooks will automatically retrieve the data from the `results/online` and `results/offline` folders and generate the plots.

## Advanced topics

### Dataset Preparation

There are two kinds of datasets used in this project: generated (synthetic) and real. Most of the benchmarking and analysis was done on [Observable](https://observablehq.com/).

#### Real Datasets

Real datasets are first prepared using notebooks, as listed below:

- [Siprojuris Dataset](https://observablehq.com/@stardisblue/siprojuris-dataset)
- [Siprojuris Localisation Dataset](https://observablehq.com/@stardisblue/siprojuris-localisation-dataset)
- [Risse Dataset](https://observablehq.com/@stardisblue/castermans-risse-dataset)
- [Italian Renaissance Architecture Dataset](https://observablehq.com/@stardisblue/castermans-italian-renaissance-architecture-dataset)
- [Trove Dataset](https://observablehq.com/@stardisblue/castermans-trove-dataset)
- [Glottovis Dataset](https://observablehq.com/@stardisblue/castermans-glottovis-dataset)
- [OCS Wrecks, Coastal Scale Dataset](https://observablehq.com/@stardisblue/ocs-wrecks-coastal-scale-dataset)

The workflow for preparing each real dataset is as follows:

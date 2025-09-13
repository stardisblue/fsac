# F-SAC

## Getting started

> In Construction

https://observablehq.com/@stardisblue/fsac

## Results

Code and plots used in the paper.

### Synthetic

- Results offline [📄 notebook jupyter](https://nbviewer.jupyter.org/urls/seafile.lirmm.fr/f/a7cafa3fcf47487a9dcf//%3Fraw%3D1), [💾 raw results](https://seafile.lirmm.fr/d/04d94e91e5114a31933c/)
- Results online [📄 notebook jupyter](https://nbviewer.jupyter.org/urls/seafile.lirmm.fr/f/025f23492986484795bf//%3Fraw%3D1), [💾 raw results](https://seafile.lirmm.fr/d/b44a34bda6734348b2d5/)
- Plots [📁 seafile](https://seafile.lirmm.fr/d/5c8c97a01588425f9fb9/)

### Real

- [🔗 Result data](https://observablehq.com/@stardisblue/benchmark-results), [💾 raw results](https://seafile.lirmm.fr/d/5305c5d7c9ce431daa0e/)
- [📊 Statistics](https://observablehq.com/@stardisblue/sac-statistics-real-dataset)

## Benchmark

Code used to prepare the data in ([Dataset](#dataset)) and the code used to do the benchmark ([Benchmark Code](#benchmark-code)). For more detailed instructions on reproducibility, go to [docs > benchmark instructions](docs/benchmark-instructions.md).

### Dataset

#### Synthetic

- source [🔗 link](https://observablehq.com/@stardisblue/random-dataset-same-density)
- settings [🔗 link](https://observablehq.com/@stardisblue/random-dataset-same-density#_configs)
- randomizers [`<>` code](https://observablehq.com/@stardisblue/random-positions)

#### Real

- Siprojuris [🔗 link](https://observablehq.com/@stardisblue/siprojuris-dataset)
- Siprojuris Localisation [🔗 link](https://observablehq.com/@stardisblue/siprojuris-localisation-dataset)
- Risse [🔗 link](https://observablehq.com/@stardisblue/castermans-risse-dataset)
- Italian Renaissance Architecture [🔗 link](https://observablehq.com/@stardisblue/castermans-italian-renaissance-architecture-dataset)
- Trove [🔗 link](https://observablehq.com/@stardisblue/castermans-trove-dataset)
- Glottovis [🔗 link](https://observablehq.com/@stardisblue/castermans-glottovis-dataset)
- OCS Wrecks, Coastal Scale [🔗 link](https://observablehq.com/@stardisblue/ocs-wrecks-coastal-scale-dataset)

### Benchmark Code

- Synthetic [`<>` code](https://observablehq.com/d/bbe2ffd9be68d2d5)
- REAL [`<>` code](https://observablehq.com/@stardisblue/benchmark-primer)

## Alternative Results & Benchmark

Contains the alternative benchmark used to validate our configuration

### Real Scale 3

- [🔗 Benchmark](https://observablehq.com/d/4081a0899b7fe88a)
- [🔗 Results](https://observablehq.com/d/ed920e95ede176db)
- [📊 Statistics](https://observablehq.com/d/02566157bd131e37)

## Implementations

Contains the implementation for all the algorithms used in the paper.

### `OSAC`

- [`<>` code](https://observablehq.com/@stardisblue/osac)
- `offline` [`<>` code](https://observablehq.com/@stardisblue/offline-osac)

### `IOSAC`

- [`<>` code](https://observablehq.com/@stardisblue/iosac)
- `offline` [`<>` code](https://observablehq.com/@stardisblue/offline-iosac)

### `FSAC`

- [`<>` code](https://observablehq.com/@stardisblue/fsac)
- `offline` [`<>` code](https://observablehq.com/@stardisblue/offline-fsac)

### `QUAD` & `QUAD+BIG`

- [`<>` code](https://observablehq.com/@stardisblue/growing-glyphs)
- [github](https://github.com/stardisblue/ts-growing-glyphs)
- Author's implementation [github](https://github.com/Caster/growing-glyphs)

#### `QUAD` & `QUAD+BIG` bonus

- [Real dataset to tsv](https://observablehq.com/d/8e9c61dfc291e3d9)
- [📊 Statistics, Java version time benchmark](https://observablehq.com/d/90c52d9fb54ff51c)

## Discussions

Describes related discussions.

- [What happens when we increase the number of zoom levels ?](https://observablehq.com/d/09935e60ccd96d96)
- [📊 Java statistics](https://observablehq.com/d/90c52d9fb54ff51c)

## Various notes

Various interesting or notable findings

### O-SAC

- [Why kd-tree can't be used as overlap detection](https://observablehq.com/d/dac3861d2ff7aa3e)
- [Why can't we use O-SAC as is offline, why do we need to adapt it.](https://observablehq.com/d/b01c99aefe483a76)

### F-SAC

- [F-SAC animated](https://observablehq.com/d/b703128853b854c4)
- [F-SAC worstcase](https://observablehq.com/d/93cb90ee7e0a21fb)

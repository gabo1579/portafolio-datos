# World Cup Project - Data Analysis ⚽

## Data Cleaning
This database consists of 23 datasets.
- 22 datasets contain detailed historical information on matches and players from each World Cup.
- 1 dataset contains generalized information about the tournaments and their winners.

![Data Loading](image.png)

### Accumulating the 22 Datasets
We accumulated the 22 historical datasets, normalized their structure, and cleaned the information to consolidate a single source of truth.

![Consolidation](image 1.png)

### Cleaning Process
We removed duplicate records, corrected inconsistencies in country names, and standardized date formats.

![Cleaning](image 2.png)

### Data Normalization
I removed unnecessary columns and created a new calculated column to have a homogeneous reference year for each World Cup.

![Normalization](image 3.png)

### Analysis and Queries in MySQL Workbench
Next, I loaded my clean data into MySQL Workbench to transform it and brainstorm around the following key business questions:

1. How many teams played in each tournament?
2. Which teams have played the most times in the entire history of soccer?
3. Which teams finished in the Top 3 of each tournament?
4. Which team in the entire history of the World Cup won the championship with the fewest lost games?
5. How are the best teams (considering only the Top 5 per tournament) distributed around the world, grouped by continents, and how many tournaments has each continent won?
6. Which are the worst teams per year, considering only the bottom 2 teams of each tournament?
7. Where are the World Cup teams located globally, grouped by continents? Are they concentrated in any specific region?

### Answering Questions with SQL
I began answering these questions by running advanced analytical SQL queries.

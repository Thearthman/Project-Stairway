---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-13-pandas/"}
---

# Pandas: Data Manipulation and Analysis

## Overview

**Pandas** is a powerful Python library designed for **data manipulation** and **analysis**, particularly suited for structured data. It offers two primary data structures:
- **Series** (1D): one-dimensional labeled arrays
- **DataFrame** (2D): two-dimensional data structures similar to spreadsheets

Key functionalities include:
- Data filtering
- Aggregation
- Reshaping with pivot tables
- Handling missing values
- Performing exploratory data analysis

Pandas is built on top of NumPy, providing additional features for data alignment and intuitive data indexing. This lecture uses **Pandas version 2.3.1**.

---

## Part I: Series

### Introduction to Pandas Series

A **Series** is a one-dimensional labeled array capable of holding any data type (integers, strings, floating point numbers, etc.). Key characteristics:
- Each element in a Series is associated with an **index**, which can be customized to be either numeric or string labels
- Series can be created from various data sources: lists, dictionaries, or NumPy arrays
- Common operations include accessing elements by index, performing mathematical operations, and applying functions to the entire Series

### Creating a Pandas Series

Series can be created in three primary ways:

**1. Creating a Series without specifying an index:**
```python
s1 = pd.Series([10, 20, 30, 40])
```
This creates a Series with a default integer index (0, 1, 2, 3).

**2. Creating a Series with a custom index:**
```python
s2 = pd.Series([10, 20, 30, 40],
               index=['first', 'second', 'third', 'fourth'])
```

**3. Creating a Series from a dictionary:**
```python
data = {'first': 10, 'second': 20, 'third': 30, 'fourth': 40}
s3 = pd.Series(data)
```
The dictionary keys become the index, and the dictionary values become the Series data.

All three methods produce Series with identical values but different index representations.

### Accessing Elements in a Pandas Series

There are two primary ways to access elements in a Series:

**Label-based indexing (using `.loc[]`):** Access elements using the explicit index assigned during Series creation.
```python
e1 = s.loc['second']  # Returns 20
```

**Position-based indexing (using `.iloc[]`):** Access elements using their integer position, similar to NumPy arrays.
```python
e2 = s.iloc[2]  # Returns 30 (3rd element)
```

This distinction is crucial for understanding how Pandas differs from standard Python lists and NumPy arrays, which typically only support position-based indexing.

### Accessing Values and Index Attributes

You can retrieve the values and the index of a Series using:

**`.values` attribute:** Returns a NumPy array containing the Series data
**`.index` attribute:** Returns a Pandas Index object that supports various operations such as union and intersection

```python
print(s.values)  # Output: [10 20 30 40]
print(s.index)   # Output: Index(['first', 'second', 'third', 'fourth'], dtype='object')
```

### Assigning Values to Series Elements

You can modify Series elements in place using `.loc[]` and `.iloc[]`:

```python
s.loc['second'] = 50  # Assign using label-based indexing
s.iloc[1] = 50        # Assign using position-based indexing
```

Both methods modify the Series directly without creating a new copy.

### Slicing a Pandas Series

Slicing allows you to extract a subset of elements from a Series:

**Label-based slicing (`.loc[]`):** Both the starting and stopping indices are **included** in the slice.
```python
s.loc['third':'fifth']  # Includes both 'third' and 'fifth'
```
Note: Accessing a non-existent label raises a `KeyError`.

**Position-based slicing (`.iloc[]`):** Behaves like NumPy arrays and lists—start is **included**, end is **excluded**.
```python
s.iloc[2:5]  # Returns elements at positions 2, 3, 4 (but not 5)
```

The result of slicing is a new Series view containing the selected elements.

### Masking a Pandas Series

**Masking** is a powerful technique for filtering Series elements based on conditions:

1. Create a **boolean Series** where `True` indicates the condition is satisfied and `False` otherwise
2. Apply the mask to access and/or modify elements that meet the specified condition

```python
mask = (s > 10) & (s < 30)  # Create a mask for values between 10 and 30
s[mask] = 0                 # Modify elements where mask is True
```

Unlike label-based indexing, masking allows direct element access and modification without needing the `.loc[]` function. This makes masking useful for conditional operations similar to NumPy array operations.

---

## Part II: DataFrame

### Introduction to DataFrame

A **DataFrame** is a powerful 2-dimensional data structure in Pandas, similar to a spreadsheet or SQL table. Key characteristics:
- Consists of rows and columns
- Each column is a **Series object** that can hold different data types but shares the same index
- Each column has a unique name, allowing for easy access and manipulation
- Ideal for handling structured data and performing complex data analysis and manipulation tasks

### Creating a DataFrame

DataFrames can be created from multiple sources:

**1. From existing Series with the same index:**
```python
sales = pd.Series([100, 150, 200], index=['Product A', 'Product B', 'Product C'])
cost = pd.Series([80, 90, 120], index=['Product A', 'Product B', 'Product C'])
units_sold = pd.Series([20, 30, 15], index=['Product A', 'Product B', 'Product C'])
df = pd.DataFrame({'Sales': sales, 'Cost': cost, 'Units Sold': units_sold})
```

**2. From Series with different indexes:**
When creating a DataFrame from Series with different indexes, only Series with matching index values will have data values. For indexes that do not match, the corresponding columns will have **NaN** (null) values.

**3. From a list of dictionaries:**
Each dictionary represents a row in the DataFrame.
```python
data = [{'name': 'Emma', 'age': 28, 'city': 'Beijing'},
        {'name': 'Liam', 'age': 32, 'city': 'Shanghai'}]
df = pd.DataFrame(data)
```
If no index is provided, the DataFrame automatically assigns a default integer index.

**4. From a dictionary of key-list pairs:**
Each key corresponds to a column name, and each value is a list of column entries.
```python
data_dict = {
    "Name": ["Emma", "Liam", "Noah"],
    "Age": [28, 32, 27],
    "City": ["Beijing", "Shanghai", "Guangzhou"]
}
df = pd.DataFrame(data_dict)
```

**5. From a 2D NumPy array:**
```python
arr = np.array([[28, 32, 27], [1, 2, 3], [1, 0, 1]])
df = pd.DataFrame(arr, columns=['Beijing', 'Shanghai', 'Guangzhou'],
                  index=['Age', 'ID', 'Service Available'])
```

### Accessing DataFrame Column Names and Index

The `.columns` and `.index` attributes return Index objects:

```python
print(df.columns)  # Returns Index(['Name', 'Age', 'City'], dtype='object')
print(df.index)    # Returns RangeIndex(start=0, stop=3, step=1)
```

Both attributes support operations such as union and intersection.

### Accessing DataFrame Data as a NumPy Array

The `.values` attribute converts a DataFrame to a NumPy array:
```python
arr = df.values  # Returns a 2D NumPy array
```

### Accessing DataFrame Columns

Access a single column by specifying its name in square brackets—this returns a Series:
```python
df["Humidity"]  # Returns a Series with all values from the 'Humidity' column
```

### Accessing DataFrame Rows

Rows can be accessed using the same methods as Series:

**Label-based indexing (`.loc[]`):**
```python
df.loc['A']  # Returns a Series representing the row with label 'A'
```

**Position-based indexing (`.iloc[]`):**
```python
df.iloc[0]  # Returns a Series representing the first row
```

Both methods return a Series where the index contains the column names.

### Accessing DataFrames with Slicing

Slicing allows you to select rows and/or columns simultaneously:
```python
df.loc['B':'C', 'Population':'Area (sq km)']
# Select rows 'B' to 'C' and columns 'Population' to 'Area (sq km)'
```

**Important:** You cannot mix position-based and label-based indexing in the same operation.

### Accessing DataFrames with Masking

Use masking to select rows based on conditions and combine with slicing to select specific columns:
```python
mask = (df['Population'] > 10000000) & (df['Area (sq km)'] < 7000)
df.loc[mask, 'Population':]  # Select rows matching the mask and columns from 'Population' onward
```

### Adding a New Column to DataFrame

Add a new column from a Series to a DataFrame:
```python
df['Is Coastal'] = pd.Series([False, True, False], index=['A', 'B', 'C'])
# Or simply: df['Is Coastal'] = [False, True, False]
```

The DataFrame is modified in place. If the DataFrame already has a column with the specified name, it is replaced.

### Dropping Columns from a DataFrame

Remove columns using the `.drop()` method:
```python
df = df.drop(columns=['Population', 'Area (sq km)'])
# Alternatively: df.drop(columns=['Population', 'Area (sq km)'], inplace=True)
```

The `.drop()` method returns a copy (not modified in place), so reassign the result or use `inplace=True`.

### Renaming Columns of a DataFrame

Rename columns by passing a dictionary mapping old names to new names:
```python
df = df.rename(columns={'Population': 'Pop', 'Area (sq km)': 'Area'})
```

---

## Part III: Computation

### Unary Operations on Series and DataFrames

Unary operations work with any NumPy unary function. The operation is applied element-wise to each element:

```python
df['Temperature (C)'] = (df['Temperature (F)'] - 32) * 5/9
```

**Broadcasting** works the same way as in NumPy—you can add, subtract, multiply, or divide scalar values to all Series or DataFrame elements.

### Operations between Series

When performing operations between two Series:
1. The operation is applied **element-wise** after aligning indices
2. Index elements that do not match are set to **NaN** (not a number)
3. After alignment, the index in the result is sorted (if indices don't match)

```python
city_a = pd.Series([21540000, 10000000, 8000000],
                   index=['Shanghai', 'Beijing', 'Chongqing'])
city_b = pd.Series([1000000, 2000000, 3000000],
                   index=['Beijing', 'Chongqing', 'Guangzhou'])
result = city_a + city_b
# 'Shanghai' and 'Guangzhou' will have NaN in the result
```

### Operations between DataFrames

To perform operations with two DataFrames:
1. Align both the **index** (rows) and the **columns**
2. The operation is applied element-wise after alignment
3. If columns are not aligned, NaN values are inserted in all rows of the unaligned columns

```python
df1 + df2  # Both index and columns must align
```

### Aggregations

**Aggregation functions** compute summary statistics:
- **Mean:** `df.mean()` or `s.mean()`
- **Standard deviation:** `df.std()` or `s.std()`
- **Minimum value:** `df.min()` or `s.min()`
- **Maximum value:** `df.max()` or `s.max()`
- **Sum:** `df.sum()` or `s.sum()`

**For Series:** Returns a single scalar value representing the mean, sum, etc., of all Series elements.

```python
mean_population = populations.mean()  # Returns a single number
```

**For DataFrames:** Applied column-wise and returns a Series with the aggregate value for each column separately.

```python
mean_values = df[['Population', 'Area (sq mi)']].mean()
# Returns a Series with one mean value per column
```

---

## Part IV: File I/O and Data Handling

### Loading Data from a CSV File

Load a DataFrame from a CSV file using `pd.read_csv()`:

```python
df = pd.read_csv('./data/employees.csv',
                  sep=',',
                  skiprows=0,
                  na_values=['N/A', 'Missing'])
```

**Key parameters:**
- **`sep`:** Specify the delimiter (default is comma)
- **`skiprows`:** Skip rows from the beginning (default is 0)
- **`na_values`:** Specify custom missing value indicators (default recognizes 'NaN' and empty fields)

**Important:** The function automatically reads the header from the first line and infers column data types.

### Saving Data to a CSV File

Save a DataFrame to a CSV file using the `.to_csv()` method:

```python
df.to_csv('./data/employees2.csv', sep=',', index=False)
```

**Key parameters:**
- **`index=False`:** Prevents writing the index to the file (often desirable)

---

## Part V: Advanced Indexing and Data Cleaning

### Fancy Indexing / Advanced Indexing on Series

Access a subset of a Series by specifying a list of indices:

```python
s.loc[['first', 'third']]  # Access labels 'first' and 'third'
s.iloc[[0, 2]]             # Access positions 0 and 2
```

### Fancy Indexing / Advanced Indexing on DataFrames

Select specific rows and columns by providing two lists:

```python
df.loc[['A', 'C'], ['City', 'Population']]  # Select rows A and C, columns City and Population
```

You can also update selected rows and columns:
```python
df.loc[['A', 'C'], ['City', 'Population']] = ['Updated City', 0]
```

### Masking and Fancy Indexing Combined

Combine masking conditions with column selection:

```python
mask = (df['Population'] > 10000000) & (df['Area (sq km)'] < 7000)
df.loc[mask, ['City', 'Area (sq km)']]
```

This combines the power of both techniques for complex data filtering.

### Handling Missing Values

**Missing values** in Pandas are represented as:
- **`None`:** A Python object (slower performance)
- **`np.nan`:** A NumPy floating-point number (better for numerical computation)

Pandas automatically converts between these types when appropriate.

**Checking for missing values:**
```python
null_mask = s.isnull()  # Returns a boolean mask (True for missing)
not_null_mask = s.notnull()  # Returns the opposite
```

**Removing missing values:**
```python
s.dropna()  # Returns a new Series without missing values
df.dropna()  # Returns a new DataFrame (removes rows with any missing value)
```

**Filling missing values:**
```python
mean_value = s.mean()
s.fillna(mean_value)  # Fill all NaN with the mean value
```

### Grouping Data Inside a DataFrame

Analyze data by grouping, aggregating, and filtering:

1. Use the `.groupby()` method to create a **DataFrameGroupBy object**
2. Specify the column(s) to group by (the key)

**Iterating over groups:**
```python
groupedDf = df.groupby('Region')  # Create 2 groups
for key, groupDf in groupedDf:
    print(key)
    print(groupDf)
```

**Aggregating grouped data:**
```python
groupedDf = df.groupby('Department')
result = groupedDf.mean().reset_index()
# Calculates mean for each group
```

---

## Key Terms

- **Aggregation:** Combining multiple values into a single summary statistic
- **Advanced indexing:** Accessing data using lists of indices (fancy indexing)
- **DataFrame:** 2D data structure with rows and columns
- **Fancy indexing:** Same as advanced indexing
- **Label-based indexing:** Using explicit index labels to access data
- **Pandas:** Python library for data manipulation and analysis
- **Position-based indexing:** Using integer positions to access data
- **Masking:** Using boolean conditions to filter elements
- **Missing values:** Null or undefined values (NaN, None)
- **Series:** 1D labeled array data structure
- **Structured data:** Data organized in rows and columns

---

## Review Questions and Key Concepts

The following review questions highlight the most important concepts from this lecture:

1. **Core Definition:** Pandas is a library for **data manipulation** and **analysis**
2. **Primary Data Structures:** **Series** (1D) and **DataFrame** (2D)
3. **Key Functionalities:** **Data filtering**, **aggregation**, **reshaping with pivot tables**
4. **Series Definition:** A **one-dimensional labeled array** capable of holding any data type
5. **Series Elements:** Each element is associated with an **index**
6. **Series Creation:** From **lists**, **dictionaries**, or **NumPy arrays**
7. **Accessing Series Elements:** Using `.loc[]` for label-based and `.iloc[]` for position-based access
8. **Series Attributes:** `.values` (NumPy array) and `.index` (Index object)
9. **Series Modification:** Using `.loc[]` and `.iloc[]` for assignment
10. **Series Slicing:** `.loc[]` includes both endpoints; `.iloc[]` excludes the end (like Python slicing)
11. **Masking:** Creates a **boolean Series** where **True** indicates condition satisfaction
12. **DataFrame Column Access:** Using **square brackets [ ]**
13. **DataFrame Grouping:** Using the `.groupby()` method
14. **CSV Loading:** Using `pd.read_csv()` function
15. **CSV Saving:** Using the `.to_csv()` method
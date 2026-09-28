---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-14-matplotlib/"}
---

# Lecture 14: Matplotlib

## Introduction to Matplotlib

**Matplotlib** is a comprehensive library for creating static, animated, and interactive visualizations in Python. It is widely used for data visualization across various fields, including data science, engineering, and research.

### Key Features

- **Static Visualizations**: Generate high-quality static plots, such as line graphs, bar charts, and scatter plots.
- **Animated Visualizations**: Create dynamic visualizations that illustrate changes over time or other variables.
- **Interactive Visualizations**: Build interactive plots that allow users to explore data through zooming, panning, and real-time updates.

For this course, we use **Matplotlib version 3.10.3** and focus on **static visualizations**.

## Why Matplotlib?

Matplotlib is chosen for several important reasons:

- **Wide Adoption**: Matplotlib is one of the most widely used libraries for data visualization in the Python ecosystem.
- **Customization**: It offers extensive options for customizing visual elements, including colors, labels, and styles.
- **Integration**: Matplotlib easily integrates with other libraries such as NumPy, Pandas, and Seaborn (a statistical data visualization library) for enhanced data analysis and visualization.

## Key Components of a Matplotlib Figure

Understanding the structure of a Matplotlib figure is essential for effective visualization. A Matplotlib figure is composed of several key elements:

### Core Components

- **Figure**: This serves as the primary container for all visual elements, functioning as the canvas for the entire plot.
- **Axes**: These are the specific regions within the figure where data visualization occurs; a single figure can incorporate multiple axes.
- **Axis**: The axes define the horizontal (x-axis) and vertical (y-axis) dimensions, including their limits, tick marks, and labels essential for data interpretation.
- **Lines and Markers**: Lines are utilized to connect data points, illustrating trends, while markers highlight individual data points, particularly in scatter plots.
- **Title and Labels**: The title of the plot provides overarching context, while axis labels clarify the data being represented on each respective axis.

## Introduction to Matplotlib Pyplot

**Pyplot** is a module of Matplotlib designed for creating static, interactive, and animated visualizations in Python. To effectively utilize Pyplot, follow these steps:

1. **Import the Module**: Begin by importing the module using `import matplotlib.pyplot as plt`.
2. **Prepare Data**: Organize your data into lists or arrays for plotting.
3. **Create the Plot**: Generate the plot by calling `plt.plot()` with your data.
4. **Enhance the Visualization**: Customize the plot by adding titles, axis labels, and other features using `plt.title()`, `plt.xlabel()`, and `plt.ylabel()`.
5. **Display the Plot**: Finally, render the plot on the screen with `plt.show()`.

## Figures and Axes

Understanding the distinction between Figures and Axes is crucial for working with Matplotlib:

- The **Figure** object contains all the plots. You can have multiple plots inside the Figure object.
- You can also save the figure as an image (e.g., JPEG, PNG, etc.)
- You can have **one or more Axes** inside the figure object, and each Axes object corresponds to a plot.
- Each **Axes** has an x axis and a y axis that represent the data that you want to plot.

### Creating a New Figure with a Single Plot

To create a Figure, use the `subplots()` function from the Matplotlib library. The `subplots()` function returns a new Figure and its Axes object.

```python
# Filename: single_plot_create.py
import matplotlib.pyplot as plt

# The width and height are 5 and 3 inches
fig, ax = plt.subplots(figsize=(5, 3))
plt.show()
```

### Creating a New Figure with Multiple Plots

To create multiple plots, specify the number of rows and columns in the parameters. The first two parameters of `plt.subplots()` define the number of plots as rows and columns. It returns the Figure object and the Axes as a NumPy array, allowing you to access each chart using NumPy indexing methods.

```python
# Filename: multiple_plots_create.py
import matplotlib.pyplot as plt

# Multiple plots with 2 rows and 3 columns
fig, ax = plt.subplots(2, 3, figsize=(5, 3))
plt.show()
```

---

# Part I: Pairwise Data Visualization

## Overview of Pairwise Data Visualization

Visualization techniques for pairwise data include plots of (x,y) coordinates, tabular data (var₀, ..., varₙ), and functional relationships of the form f(x) = y.

### Available Methods

- **`plot(x, y)`**: Creates a line plot connecting the data points.
- **`scatter(x, y)`**: Generates a scatter plot to display individual data points.
- **`bar(x, height)`**: Produces a bar chart representing categorical data.
- **`stem(x, y)`†**: Generates a stem plot for discrete data representation.
- **`fill_between(x, y1, y2)`†**: Fills the area between two curves.
- **`stackplot(x, y)`†**: Creates a stacked area plot to visualize cumulative data.
- **`stairs(values)`†**: Generates a step plot for visualizing changes in data.

†: Self-explore

## Drawing a Line Curve

To draw a line curve, use the `plot()` method of the Axes object (`ax.plot`). This method takes two lists or NumPy arrays as input: the first list contains the x-coordinates, and the second contains the y-coordinates of the points in the line.

### Customization Options

You can customize the appearance of the plot by specifying the **marker type** using the `marker` attribute, and by adding a legend for the data points with the `label` attribute. You can specify the labels (i.e., names) of the x and y axes using `set_xlabel()` and `set_ylabel()`, respectively, and add a title to the plot using the `set_title()` method.

### Example: Drawing Line Curves

```python
import matplotlib.pyplot as plt

# Filename: line_curve_draw.py
fig, ax = plt.subplots(figsize=(5, 3))

# Line through (x,y) -> (0,0), (2,4), (4,16), (6,36), (8, 64)
ax.plot([0, 2, 4, 6, 8], [0, 4, 16, 36, 64],
        marker='o', label="Data Points 1")

# Another line through (x,y) -> (0,3), (4,7), (8,50)
ax.plot([0, 4, 8], [3, 7, 50],
        marker='x', label="Data Points 2")

ax.set_xlabel("X Values")
ax.set_ylabel("Y Values")
ax.set_title("Sample Plot of X vs Y")
plt.show()
```

### Drawing Line Plots in Multiple Rows and Columns

Each subplot can represent different datasets. x and y axis labels can be added using `set_xlabel()` and `set_ylabel()`. Titles for each subplot are set using the `set_title()` method.

```python
import matplotlib.pyplot as plt

# Filename: line_plot_draw_multiples.py
fig, ax = plt.subplots(2, 2, figsize=(10, 6))

ax[0, 0].plot([0, 1, 2], [2, 4, 6])  # First subplot
ax[0, 0].set_xlabel("X Values")
ax[0, 0].set_ylabel("Y Values")
ax[0, 0].set_title("Plot 1: Line through (0,2), (1,4), (2,6)")

ax[0, 1].plot([0, 1, 2], [3, 6, 9])  # Second subplot
ax[0, 1].set_xlabel("X Values")
ax[0, 1].set_ylabel("Y Values")
ax[0, 1].set_title("Plot 2: Line through (0,3), (1,6), (2,9)")

ax[1, 0].plot([0, 1, 2], [1, 2, 3])  # Third subplot
ax[1, 0].set_xlabel("X Values")
ax[1, 0].set_ylabel("Y Values")
ax[1, 0].set_title("Plot 3: Line through (0,1), (1,2), (2,3)")

ax[1, 1].plot([0, 1, 2], [4, 8, 12])  # Fourth subplot
ax[1, 1].set_xlabel("X Values")
ax[1, 1].set_ylabel("Y Values")
ax[1, 1].set_title("Plot 4: Line through (0,4), (1,8), (2,12)")

plt.tight_layout()
plt.show()
```

## Drawing a Sequence of Points/Segments

The `plt.plot()` function also allows you to display a sequence of points or segments that share the same properties (e.g., size, color, width).

### Key Customization Parameters

- **`c`**: Color of the plot
- **`linestyle`**: Style of the line (solid, dashed, etc.); use empty string `""` for no line
- **`marker`**: Type of marker to display (e.g., `'o'`, `'*'`, `'x'`)
- **`label`**: Legend label for the data

### Example: Customizing Plot Appearance

```python
# Filename: sequence_points_segments_draw.py
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 5, 20)
y = np.exp(x)

fig, ax = plt.subplots(figsize=(3, 2))

ax.plot(x, y, c="blue", linestyle="",
        marker='*', label="Curve 1")
ax.plot(x, 2*y, c="green",
        linestyle="--", label="Curve 2")

# Specify the legend position with relative position
ax.legend(loc=(1.1, 0.5))
plt.show()
```

## Scatter Plot: Displaying a Set of Points with Colormap

To show a set of points and assign them custom properties (e.g., color, size), use the `ax.scatter()` method. You need to specify the lists of x and y coordinates of all your points as parameters (as NumPy arrays).

### Key Parameters

- **`c`**: Color or array of colors for each point (can also be mapped from data values)
- **`cmap`**: Colormap to use for mapping values to colors
- **`s`**: Size of the points, expressed as the area in square points (dpi)

### Example: Scatter Plot with Colormap

```python
import numpy as np
import matplotlib.pyplot as plt

# Filename: scatterplot.py
x = np.random.rand(20)
y = np.random.rand(20)

# Color as a function of the positions of the points
colors = x + y

# Size as a function of the positions of the points
area = 100 * (x + y)

fig, ax = plt.subplots(figsize=(3, 2))

# Specify the colormap as "spring"
ax.scatter(x, y, c=colors, cmap="spring", s=area)
plt.show()
```

## Bar Chart: Displaying a Sequence of Numbers as Bars

To plot vertical or horizontal bars, use the `ax.bar()` method. You can specify the position of each bar on the x-axis as a list, and the height of each bar as a corresponding list (both lists should have the same size). You can assign text labels to the ticks on the horizontal axis using the `tick_label` parameter.

### Single Bar Chart Example

```python
# Filename: barchart_single.py
import numpy as np
import matplotlib.pyplot as plt

# Position of the bars on the x-axis
x = [1, 2, 3]

# The height of each bar
height = [10, 2, 8]
labels = ["Sensor 1", "Sensor 2", "Sensor 3"]

fig, ax = plt.subplots(figsize=(3, 2))
ax.bar(x, height, tick_label=labels)
plt.show()
```

### Multiple Bar Chart: Grouping Bars Side-by-Side

You can group multiple bars side-by-side by positioning them at different offsets. Position the two bar plots at x + width/2 and x - width/2.

### Example: Multiple Bars

```python
# Filename: barchart_multiples.py
import numpy as np
import matplotlib.pyplot as plt

heightMin = [10, 2, 8]
heightMax = [8, 6, 5]
x = np.arange(3)
width = 0.4
labels = ["Sensor 1", "Sensor 2", "Sensor 3"]

fig, ax = plt.subplots(figsize=(3, 2))

# Blue bars
ax.bar(x + width / 2, heightMin, width=width, label="Min")

# Orange bars
ax.bar(x - width / 2, heightMax, width=width, label="Max")

ax.set_xticks(x)
ax.set_xticklabels(labels)
ax.legend(loc=(1.1, 0.5))
plt.show()
```

---

# Part II: Statistical Distributions

## Overview of Statistical Distributions

Visualization techniques for depicting the distribution of one or more variables within a dataset. Many of these methods also provide calculations of the distributions.

### Available Methods

- **`hist(x)`**: Creates a histogram to visualize the frequency distribution of a single variable.
- **`boxplot(X)`**: Generates a box plot to summarize the distribution of data through their quartiles.
- **`errorbar(x, y, yerr, xerr)`†**: Displays data points with error bars indicating variability.
- **`violinplot(D)`†**: Combines a box plot and a density plot to show the distribution of data.
- **`eventplot(D)`†**: Visualizes events along an axis, useful for time series data.
- **`hist2d(x, y)`†**: Creates a 2D histogram to display the joint distribution of two variables.
- **`hexbin(x, y, C)`†**: Generates a hexagonal bin plot for bivariate data visualization.
- **`pie(x)`†**: Creates a pie chart to represent proportions of categorical data.
- **`ecdf(x)`†**: Computes and plots the empirical cumulative distribution function.

†: Self-explore

## Creating a Histogram

The `hist(x)` function is used to create a histogram, which visualizes the distribution of a dataset. `x` is a one-dimensional array or list containing numerical data.

### Customization Options

You can customize the number of bins to adjust the granularity of the histogram using the `bins` parameter. Additional options such as `color`, `alpha`, and `edgecolor` can enhance the visual appeal of the histogram.

- **`bins`**: Number of bins or bin edges; controls the granularity of the histogram
- **`color`**: Color of the bars
- **`alpha`**: Transparency level (0 to 1)
- **`edgecolor`**: Color of the bar edges

### Example: Creating a Histogram

```python
# Filename: histogram.py
import matplotlib.pyplot as plt
import numpy as np

data = np.random.randn(1000)  # Generate random data

plt.hist(data, bins=30, color='blue',
         alpha=0.7, edgecolor='black')

plt.title("Histogram of Random Data")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.show()
```

## Creating a Box Plot

The `boxplot(X)` function creates a box plot, which visualizes the distribution of a dataset through its quartiles. `X` is a one-dimensional array or a two-dimensional array (for multiple box plots).

### Understanding Box Plots

Box plots provide a summary of the central tendency, variability, and potential outliers in the data. They display:
- The median (middle line in the box)
- The first and third quartiles (edges of the box)
- Whiskers extending to show the range of the data
- Outliers (if any)

### Customization Options

You can customize the appearance of the box plot using parameters such as:
- **`notch`**: If True, creates a notched box plot
- **`patch_artist`**: If True, fills the box with color
- **`boxprops`**: Dictionary defining box properties (e.g., facecolor, color)
- **`medianprops`**: Dictionary defining median line properties
- **`vert`**: If False, creates a horizontal box plot

### Example: Creating a Box Plot

```python
import matplotlib.pyplot as plt
import numpy as np

# Filename: boxplot.py
data = [np.random.normal(0, std, 100) for std in range(1, 4)]

plt.boxplot(data, notch=True, patch_artist=True,
            boxprops=dict(facecolor='lightblue', color='blue'),
            medianprops=dict(color='red'))

plt.title("Box Plot of Random Data")
plt.xlabel("Dataset")
plt.ylabel("Value")
plt.xticks([1, 2, 3], ['Data 1', 'Data 2', 'Data 3'])
plt.show()
```

---

# Advanced Visualization Techniques

## Saving a Plot to File

Generated figures can be saved to files in various **formats** (e.g., JPEG, PNG, PDF, EPS, etc.). Use the `fig.savefig()` method to save the figure.

### Example: Saving a Figure

```python
# Filename: save_plot.py
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(3, 2))
ax.plot([0, 1, 2], [2, 4, 6])
ax.plot([0, 1, 2], [3, 6, 9])

fig.savefig("test.png")  # or .jpg, .eps, .pdf
```

## Gridded Data Visualization

For visualization of gridded data (regular or structured data), several methods are available:

- **`imshow(Z)`†**: Displays a 2D array as an image
- **`pcolormesh(X, Y, Z)`†**: Creates a pseudocolor plot using quadrilaterals
- **`contour(X, Y, Z)`**: Creates contour lines representing constant values
- **`contourf(X, Y, Z)`†**: Filled contour plot
- **`barbs(X, Y, U, V)`†**: Creates vector field visualization with barbs
- **`quiver(X, Y, U, V)`†**: Creates vector field visualization with arrows
- **`streamplot(X, Y, U, V)`†**: Creates streamlines for vector fields

†: Self-explore

### Creating Contour Plots with `contour()`

The `contour()` function is used to create contour plots, which represent 3D data in two dimensions using contour lines. A grid of data points is represented by 2D arrays for the x and y coordinates and a corresponding z value.

#### Key Parameters

- **`levels`**: Number of contour lines or specific z-values to display
- **`cmap`**: Colormap for coloring the contours
- **`colorbar()`**: Add a colorbar to show the mapping of colors to values

#### Example: Contour Plot

```python
# Filename: contour.py
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-5, 5, 100)
y = np.linspace(-5, 5, 100)
X, Y = np.meshgrid(x, y)
Z = np.sin(np.sqrt(X**2 + Y**2))

plt.contour(X, Y, Z, levels=20, cmap='viridis')
plt.colorbar(label='Z Value')
plt.title("Contour Plot of $Z = \\sin(\\sqrt{X^2 + Y^2})$")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.show()
```

## Irregularly Gridded Data Visualization

For visualization of irregularly spaced data, triangulation-based methods are available:

- **`tricontour(x, y, z)`**: Creates contour lines for irregularly spaced data
- **`tricontourf(x, y, z)`†**: Filled contour plot for irregularly spaced data
- **`tripcolor(x, y, z)`†**: Pseudocolor plot for triangulated data
- **`triplot(x, y)`†**: Displays triangulation of scattered data

†: Self-explore

### Creating Triangular Contour Plots with `tricontour()`

The `tricontour()` function is used to create contour plots for irregularly spaced data defined by triangles. Three 1D arrays representing the x and y coordinates of the points, and a corresponding z value for each point are required.

#### Key Parameters

- **`levels`**: Number of contour lines or specific z-values
- **`cmap`**: Colormap for coloring
- **`triangulate`**: Define the triangulation of the data for better visualization

#### Example: Triangular Contour Plot

```python
# Filename: tricontour.py
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.tri import Triangulation

x = np.random.rand(30)
y = np.random.rand(30)
z = np.sin(x) + np.cos(y)

triang = Triangulation(x, y)  # Create triangulation
plt.tricontour(triang, z, levels=14, cmap='plasma')
plt.colorbar(label='Z Value')
plt.title("Triangular Contour Plot")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.show()
```

## Using `fill_between()` for Area Filling

The `fill_between()` function is used to fill the area between two horizontal curves, useful for highlighting regions in a plot. x-coordinates and two sets of y-coordinates define the boundaries of the filled area.

### Key Parameters

- **`x`**: x-coordinates
- **`y1`, `y2`**: Lower and upper bounds of the filled area
- **`color`**: Color of the filled area
- **`alpha`**: Transparency level
- **`label`**: Legend label

### Example: Area Filling

```python
# Filename: area_filling.py
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.sin(x) + 0.5

plt.fill_between(x, y1, y2, color='skyblue',
                 alpha=0.5, label='Area between curves')

plt.plot(x, y1, label='y1 = sin(x)', color='blue')
plt.plot(x, y2, label='y2 = sin(x) + 0.5', color='orange')

plt.title("Area Filling with fill_between()")
plt.xlabel("X-axis")
plt.ylabel("Y-axis")
plt.legend()
plt.show()
```

## 3D and Volumetric Data Visualization

For advanced 3D and volumetric visualizations, the following methods are available:

- **`bar3d(x, y, z, dx, dy, dz)`†**: Creates 3D bar plots
- **`fill_between(x1, y1, z1, x2, y2, z2)`**: Fills area between 3D curves
- **`plot(xs, ys, zs)`†**: Creates 3D line plots
- **`quiver(X, Y, Z, U, V, W)`†**: Creates 3D vector field visualization
- **`scatter(xs, ys, zs)`†**: Creates 3D scatter plots
- **`streamplot(x, y, u, v)`†**: Creates 3D streamlines
- **`plot_surface(X, Y, Z)`†**: Creates 3D surface plots
- **`plot_trisurf(x, y, z)`†**: Creates 3D surface plots from triangulated data
- **`voxels([x, y, z], filled)`†**: Creates 3D voxel plots
- **`plot_wireframe(X, Y, Z)`†**: Creates 3D wireframe plots

†: Self-explore

---

## Key Terms

- **Animated Visualizations**: Dynamic plots that change over time
- **Area Filling**: Coloring the region between curves
- **Axes**: Specific regions within a figure where data visualization occurs
- **Axis**: Horizontal (x) and vertical (y) dimensions of a plot
- **Bar Chart**: Visualization using rectangular bars to show categorical data
- **Box Plot**: Summary of data distribution using quartiles
- **Color Map**: Mapping of data values to colors
- **Contour Plot**: 2D representation of 3D data using contour lines
- **Data Visualization**: Visual representation of data
- **Error Bars**: Visual representation of data variability
- **Figure**: Primary container for all visual elements in a plot
- **fill_between**: Function to fill the area between two curves
- **Gridded Data**: Regular or structured data on a grid
- **Histogram**: Frequency distribution visualization
- **Interactive Visualizations**: Plots allowing user interaction
- **Irregularly Gridded Data**: Non-uniform or scattered data
- **Matplotlib**: Python library for data visualization
- **Plot**: Visual representation of data
- **Pyplot**: Matplotlib module for creating visualizations
- **Scatter Plot**: Visualization of individual points
- **Static Visualizations**: Fixed plots without animation
- **Triangular Contour Plot**: Contour plot for irregularly spaced data

---

## Review Questions

### Section 1

1. Matplotlib is a comprehensive library for creating **static plots**, animated, and interactive visualizations in Python.
2. The **Pyplot** module is designed for creating static, interactive, and animated visualizations.
3. A **figure** serves as the primary container for all visual elements in a plot.
4. The **axis** defines the horizontal (x-axis) and vertical (y-axis) dimensions of a plot.
5. The **hist()** function is used to create a histogram, which visualizes the distribution of a dataset.
6. To create a **box** plot, you can use the boxplot() function.

### Section 2

7. The **scatter()** method is used to show a set of **points** on a plot.
8. You can fill the area between two curves using the **fill_between** function.
9. The **contour()** function is used to create **contour** plots that represent 3D data in two dimensions.
10. To create multiple plots in one figure, use the subplots() function with specified **rows** and **columns**.
11. The **marker** parameter in the plot() method allows you to customize the appearance of the plot.
12. You can save a figure to a file using the fig.savefig() method, which allows saving in various **formats**.

---

## Key Takeaways and Focus Areas

Based on the review questions, the following areas are particularly important:

### Core Concepts
- Understanding the three-level hierarchy: **Figure** → **Axes** → **Axis/Data**
- Pyplot as the primary interface for creating visualizations
- The `subplots()` function for managing figure layouts

### Pairwise Data Visualization (Part I)
- **Line plots** (`plot()`) with marker customization and labels
- **Scatter plots** (`scatter()`) with color mapping and size variation
- **Bar charts** (`bar()`) including single and grouped bar arrangements
- The importance of the **marker** parameter for customizing plot appearance

### Statistical Distributions (Part II)
- **Histograms** (`hist()`) for frequency distribution analysis
- **Box plots** (`boxplot()`) for distribution summary and outlier detection
- Understanding the relationship between these visualizations and data analysis

### Advanced Features
- **fill_between()** for highlighting regions between curves
- **Contour plots** (`contour()`) and **triangular contour plots** (`tricontour()`) for 3D data representation
- **Saving figures** in various formats using `savefig()`

### Customization and Best Practices
- Use of `set_xlabel()`, `set_ylabel()`, and `set_title()` for labeling
- The `label` and `legend()` for data identification
- Color mapping (`cmap`) for enhanced visualization
- Multiple subplots organization with `tight_layout()`
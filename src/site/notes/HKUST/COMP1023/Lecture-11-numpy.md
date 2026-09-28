---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-11-numpy/"}
---

# Lecture 11: Numerical Python (NumPy)

## NumPy Overview

NumPy stands for **Numerical Python** and serves as the fundamental library for numerical and scientific calculations in the Python programming language. It offers a high-efficiency multidimensional array structure along with various tools for manipulating these arrays. This lecture uses NumPy version 2.3.1.

---

## Understanding Arrays

### Core Concepts

A NumPy array represents a **grid of values** that are all of the same data type and are indexed by a tuple of non-negative integers.

- **Rank**: The number of dimensions in the array
- **Shape**: A tuple of integers that specifies the size of the array in each dimension in the order from the outmost to the intermost. 

NumPy arrays can be created from nested lists in Python and elements can be retrieved using square brackets.

### Example: Basic Array Creation and Access

```python
import numpy as np

# Create a rank 1 array
a: np.ndarray = np.array([10, 20, 30])
print(type(a))          # Output: <class 'numpy.ndarray'>
print(a.shape)          # Output: (3,)
print(a[0], a[1], a[2]) # Output: 10 20 30

# Modify an element
a[0] = 50
print(a)                # Output: [50 20 30]

# Create a rank 2 array
b: np.ndarray = np.array([[7, 8, 9], [10, 11, 12]])
print(b.shape)          # Output: (2, 3)
print(b[0, 0], b[0, 1], b[1, 0]) # Output: 7 8 10
```

---

## Creating Arrays

NumPy provides multiple functions for creating arrays with different initialization patterns:

```python
import numpy as np

# Generate an array filled with zeros
a: np.ndarray = np.zeros((3, 3))

# Generate an array filled with ones
b: np.ndarray = np.ones((2, 3))

# Generate an array with a constant value
c: np.ndarray = np.full((3, 2), 5)

# Generate a 3x3 identity matrix
d: np.ndarray = np.eye(3)

# Generate an array with random values
e: np.ndarray = np.random.rand(3, 2)
```

---

## Indexing and Slicing Arrays

### Indexing Operations

| Expression        | Description                                         |
| ----------------- | --------------------------------------------------- |
| `a[i]`            | Retrieve element at index i (0-indexed)             |
| `a[-i]`           | Retrieve i-th element from end (-1 is last element) |
| `a[i:j]`          | Retrieve elements from i to j (exclusive)           |
| `a[:]` or `a[0:]` | Retrieve all elements                               |
| `a[:i]`           | Retrieve elements from 0 to i (exclusive)           |
| `a[i:]`           | Retrieve elements from i to last                    |
| `a[i:j:n]`        | Retrieve elements from i to j with step size n      |
| `a[::-1]`         | Retrieve all elements in reverse order              |

### Multi-dimensional Slicing

Just like Python lists, NumPy arrays support slicing. For multidimensional arrays, specify a slice for each dimension.

```python
import numpy as np

# Create a rank 2 array with shape (3, 4)
a: np.ndarray = np.array([[10, 20, 30, 40], 
                          [50, 60, 70, 80], 
                          [90, 100, 110, 120]])

# Extract a subarray with shape (2, 2)
b: np.ndarray = a[:2, 2:4]  # First 2 rows, columns 2 and 3

# Important: A slice is a VIEW of original data
print(a[0, 2])  # Output: 30
b[0, 0] = 99    # b[0, 0] refers to same data as a[0, 2]
print(a[0, 2])  # Output: 99
```

### Mixing Integer and Slice Indexing

When combining integer indexing with slice indexing, the result has lower rank:

```python
import numpy as np

a: np.ndarray = np.array([[11, 12, 13, 14], 
                          [15, 16, 17, 18], 
                          [19, 20, 21, 22]])

# Integer indexing reduces rank
row_r1: np.ndarray = a[2, :]       # Rank 1: [19 20 21 22]
row_r2: np.ndarray = a[2:3, :]     # Rank 2: [[19 20 21 22]]

print(row_r1.shape)  # (4,)
print(row_r2.shape)  # (1, 4)

# Same applies to columns
col_r1: np.ndarray = a[:, 2]       # Rank 1: [13 17 21]
col_r2: np.ndarray = a[:, 2:3]     # Rank 2: [[13] [17] [21]]

print(col_r1.shape)  # (3,)
print(col_r2.shape)  # (3, 1)
```

---

## Advanced Indexing

### Integer Array Indexing (Fancy Indexing)

Integer array indexing enables you to create arbitrary arrays using data from another array. You can reuse elements and select specific indices.

```python
import numpy as np

a: np.ndarray = np.array([[7, 8], [9, 10], [11, 12]])

# Use integer array indexing to select elements
result = a[[0, 1, 2], [1, 0, 1]]  # Output: [8 9 12]
# Equivalent to: [a[0,1], a[1,0], a[2,1]]

# Reuse the same element
result = a[[1, 1], [0, 0]]        # Output: [9 9]
```

### Selecting One Element from Each Row

A useful technique with integer indexing is selecting or modifying one element from each row:

```python
import numpy as np

a: np.ndarray = np.array([[13, 14, 15], 
                          [16, 17, 18], 
                          [19, 20, 21], 
                          [22, 23, 24]])

b: np.ndarray = np.array([1, 0, 2, 1])  # Indices array

# Select one element from each row
result = a[np.arange(4), b]  # Output: [14 16 21 23]

# Modify one element from each row
a[np.arange(4), b] += 5
# Result: [[13 19 15] [21 17 18] [19 20 26] [22 28 24]]
```

### Boolean Array Indexing

Boolean array indexing allows you to select arbitrary elements based on a condition.

```python
import numpy as np

a: np.ndarray = np.array([[7, 8], [9, 10], [11, 12]])

# Create a boolean mask
bool_idx: np.ndarray = (a < 10)
# Output: [[True  True] [True False] [False False]]

# Use boolean indexing to extract elements
result = a[bool_idx]              # Output: [7 8 9]

# Concise one-liner
result = a[a < 10]                # Output: [7 8 9]
```

### Combining Conditions with Logical Operators

Use logical operators `&` (AND), `|` (OR), and `~` (NOT) to combine conditions:

```python
import numpy as np

a: np.ndarray = np.array([[7, 8], [9, 10], [11, 12]])

# Combine conditions with parentheses
result: np.ndarray = a[(0 < a) & (a < 10)]  # Output: [7 8 9]
```

**Important Note**: Always use parentheses around each condition when combining with logical operators.

---

## Data Types in NumPy

Each NumPy array consists of elements of the same type. NumPy attempts to infer the appropriate data type, but you can explicitly specify it.

```python
import numpy as np

# Let NumPy infer the data type
x: np.ndarray = np.array([3, 4])
print(x.dtype)  # Output: int64

x = np.array([3.5, 4.5])
print(x.dtype)  # Output: float64

# Explicitly specify data type
x = np.array([3, 4], dtype=np.float32)
print(x.dtype)  # Output: float32
```

### Data Types Reference

| Category         | Data Type                                               | Description                                |
| ---------------- | ------------------------------------------------------- | ------------------------------------------ |
| Signed Integer   | `np.int8`, `np.int16`, `np.int32`, `np.int64`           | 8, 16, 32, 64-bit signed integers          |
| Unsigned Integer | `np.uint8`, `np.uint16`, `np.uint32`, `np.uint64`       | 8, 16, 32, 64-bit unsigned integers        |
| Floating Point   | `np.float16`, `np.float32`, `np.float64`, `np.float128` | 16, 32, 64, 128-bit floats                 |
| Complex          | `np.complex64`, `np.complex128`, `np.complex256`        | 64, 128, 256-bit complex numbers           |
| Boolean          | `np.bool_`                                              | Boolean type (True/False)                  |
| String           | `np.str_`, `np.bytes_`                                  | Variable-length string, byte string        |
| Object           | `np.object_`                                            | General-purpose type for arbitrary objects |
| Datetime         | `np.datetime64`, `np.timedelta64`                       | Dates/times, time differences              |
| Void             | `np.void`                                               | Flexible type                              |

---

## Mathematical Operations on Arrays

Basic mathematical operations are performed **element-wise** on arrays, accessible both as operator overloads and as NumPy functions.

```python
import numpy as np

x: np.ndarray = np.array([[2, 3], [4, 5]], dtype=np.float64)
y: np.ndarray = np.array([[6, 7], [8, 9]], dtype=np.float64)

# Element-wise addition
print(x + y)          # or np.add(x, y)
# [[8. 10.] [12. 14.]]

# Element-wise subtraction
print(x - y)          # or np.subtract(x, y)
# [[-4. -4.] [-4. -4.]]

# Element-wise multiplication
print(x * y)          # or np.multiply(x, y)
# [[12. 21.] [32. 45.]]

# Element-wise division
print(x / y)          # or np.divide(x, y)
# [[0.333... 0.428...] [0.5 0.555...]]

# Element-wise square root
print(np.sqrt(x))
# [[1.414... 1.732...] [2. 2.236...]]
```

---

## Vectors, Matrices, and Tensors

- **Vectors**: One-dimensional arrays of numerical values
- **Matrices**: Two-dimensional arrays of numerical values
- **Tensors**: Arrays with three or more dimensions

These structures are essential for representing numerical data and are crucial in statistics, machine learning, and computer science.

---

## Dot Product and Matrix Multiplication

### Dot Product

The **dot product** is the sum of the products of corresponding elements in two vectors of the same size. The result is a **scalar value**.

```python
import numpy as np

v: np.ndarray = np.array([8, 9])
w: np.ndarray = np.array([10, 11])

# Dot product of vectors (both yield 179)
result = v.dot(w)          # Using method
result = np.dot(v, w)      # Using function
```

### Matrix Multiplication

Matrix multiplication is crucial for artificial intelligence and is the matrix equivalent of the dot product between two matrices. The result is a matrix where each element corresponds to dot products of vector pairs from the two matrices.

```python
import numpy as np

x: np.ndarray = np.array([[2, 4], [6, 8]])
y: np.ndarray = np.array([[1, 3], [5, 7]])

# Matrix product of 2D arrays. The modern, preferred operator is @
# This yields [[22, 34], [46, 74]]. 
print(np.dot(x,y)) # Or x @ y

# Matrix-vector product.
# This correctly yields [52, 120].
print(x.dot([8, 9])) # Or np.dot(x, [8, 9])

# For a true dot product of flattened vectors, you must flatten them first.
# This yields a scalar: 2*1 + 4*3 + 6*5 + 8*7 = 100.
print(np.dot(x.flatten(), y.flatten()))
```

### Methods for Matrix Multiplication

Three approaches are available:
1. **`dot()` function/method**
2. **`matmul()` function**
3. **`@` operator** (Python 3.5+)

**Key Distinction**: For multi-dimensional arrays (N > 2), `dot()` and `matmul()` may produce different results. **Recommendation**: Use `matmul()` or the `@` operator for matrix multiplications.

### Using matmul and @ Operator

```python
import numpy as np

a: np.ndarray = np.array([[2, 3], [5, 7]])
b: np.ndarray = np.array([[4, 1], [6, 3]])
u: np.ndarray = np.array([8, 9])
v: np.ndarray = np.array([10, 11])

# Inner product of vectors (both yield 179)
print(np.matmul(u, v))  # or u @ v

# Matrix / vector product (yield [43 103])
print(np.matmul(a, u))  # or a @ u

# Matrix / matrix product (yield [[26 11] [62 26]])
print(np.matmul(a, b))  # or a @ b
```

---

## Functions in NumPy

### Mean Function

NumPy provides various functions for array calculations. One key function is `mean()`:

```python
import numpy as np

y: np.ndarray = np.array([[5, 10], [15, 20]])

# Calculate mean of all elements
print(np.mean(y))           # Output: 12.5

# Calculate mean of each column (axis=0)
print(np.mean(y, axis=0))   # Output: [10. 15.]

# Calculate mean of each row (axis=1)
print(np.mean(y, axis=1))   # Output: [7.5 17.5]
```

---

## Array Restructuring

### Matrix Transposition

Transposing a matrix switches rows and columns. You can use the `T` attribute, `transpose()` function, or `transpose()` method.

```python
import numpy as np

a: np.ndarray = np.array([[5, 6], [7, 8]])

print(a)
# [[5 6]
#  [7 8]]

print(a.T)                  # [[5 7] [6 8]]
print(np.transpose(a))      # [[5 7] [6 8]]
print(a.transpose())        # [[5 7] [6 8]]
```

### Transposing Multi-dimensional Arrays

The `transpose()` function includes an `axes` parameter for rearranging dimensions:

```
np.transpose(<array>, <axes>)
```

**Parameters**:
- `array`: Array to transpose
- `axes`: Tuple/list containing permutation of [0, 1, ..., N-1] where N = number of dimensions. When None or omitted, reverses dimensions.

### Example: 3D Array Transposition

```python
import numpy as np

# Create a 3D array (2 layers, 4 rows, 3 columns)
array: np.ndarray = np.array([[[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]],
                              [[12, 13, 14], [15, 16, 17], [18, 19, 20], [21, 22, 23]]])

# Rearrange axes: move axis 2 to front, 0 to middle, 1 to end
result = np.transpose(array, [2, 0, 1])  # or array.transpose([2, 0, 1])
```

### Important Note on 1D Arrays

Transposing a rank 1 (1D) array has no effect:

```python
import numpy as np

vector: np.ndarray = np.array([1, 2, 3])
print(vector)           # [1 2 3]
print(vector.T)         # [1 2 3]
print(np.transpose(vector))  # [1 2 3]
```

### Array Reshaping

Reshaping changes the array's shape without changing its data. The shape indicates elements across each dimension.

```
numpy.reshape(<array>, <newshape>)
```

**Parameters**:
- `array`: Array to reshape
- `newshape`: Integer or tuple of integers specifying new shape. One dimension can be `-1` to auto-determine size based on total elements.

### Example: Reshaping

```python
import numpy as np

array1: np.ndarray = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120])

# Reshape to 4x3
array2: np.ndarray = array1.reshape(4, 3)
# Or use -1: array1.reshape(4, -1)

print(array2)
# [[10 20 30] [40 50 60] [70 80 90] [100 110 120]]

print(array2.shape)  # (4, 3)
```

### Challenge: Creating 3D Array in One Line

**Question**: How to create this array in a single line?
```
[[[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]],
 [[12, 13, 14, 15], [16, 17, 18, 19], [20, 21, 22, 23]]]
```

**Answer**: `np.arange(24).reshape(2, 3, 4)`

---

## Expanding Array Dimensions

### Using np.newaxis

`np.newaxis` (alias for `None`) adds a new dimension of size 1 at specified location:

```python
import numpy as np

# 1D to 2D (row vector)
array1: np.ndarray = np.array([10, 20, 30, 40, 50])
array2: np.ndarray = array1[np.newaxis]  # or array1[None]
print(array2)
# [[10 20 30 40 50]]

# Add dimension at end
array4: np.ndarray = np.array([[7, 8, 9], [10, 11, 12]])
array2: np.ndarray = array4[:, :, np.newaxis]  # or array4[..., np.newaxis]
print(array2.shape)  # (2, 3, 1)
'''
[[[ 7],
[8],
[9]],

[[10],
[11],
[12]]])
'''
# Add dimension at beginning
array2: np.ndarray = array4[np.newaxis, :, :] # same as array4[np.newaxis]
print(array2.shape)  # (1, 2, 3)
'''
[[[7,8,9], [10,11,12]]]
'''
```

### Using np.expand_dims

```python
numpy.expand_dims(arr, axis)
```

**Parameters**:
- `arr`: Array to expand
- `axis`: Integer position where new axis inserted

```python
import numpy as np

array1: np.ndarray = np.array([[7, 8, 9], [10, 11, 12]])

# Add dimension after first axis
array2: np.ndarray = np.expand_dims(array1, axis=1)
print(array2.shape)  # (2, 1, 3)

# Add dimension after second axis
array2: np.ndarray = np.expand_dims(array1, axis=2)
print(array2.shape)  # (2, 3, 1)
```

---

## View and Copy

### View

A **view** is a reference to original data:
- Changes through a view affect the original data
- Example: Slicing produces a view

```python
import numpy as np

arr: np.ndarray = np.array([1, 2, 3])
view_arr: np.ndarray = arr[1:3]  # Creates a view
view_arr[0] = 10                 # Modifies arr
print(arr)  # [1 10 3]
```

### Copy

A **copy** creates a new object with the same data:
- Modifications don't affect the original
- Useful for preserving original data

```python
import numpy as np
import copy

original: np.ndarray = np.array([1, 2, 3])
copy_arr: np.ndarray = copy.copy(original)  # Shallow copy
copy_arr[0] = 10
print(original)  # [1 2 3]
```

### Operations Summary

**Operations that produce a VIEW**:
- `arr[1:3]` - Slicing
- `arr.reshape(new_shape)` - Reshape (exception: copies for non-contiguous data)
- `arr.transpose()` - Transposition
- `arr[:, :]` - Subsetting
- `arr.view()` - Explicit view creation
- `arr[np.newaxis]` - Adding new axis
- `np.expand_dims(arr, axis)` - Expand dimensions (exception: copies for non-contiguous)

**Operations that produce a COPY**:
- `np.copy(arr)` - Deep copy
- `arr.copy()` - Method to create copy
- Integer array indexing - Advanced indexing
- Boolean array indexing - Advanced indexing
- `arr.astype(new_dtype)` - Type conversion
- `np.array(arr)` - New array from existing
- `arr.tolist()` - Convert to list
- `arr[np.arange(n)]` - Indexing with array
- `arr.flatten()` - Flatten to 1D

---

## Broadcasting

### Concept

**Broadcasting** is a powerful feature that enables NumPy to handle arrays of varying shapes during arithmetic operations. It allows performing arithmetic between arrays of different shapes by extending the smaller array along the last mismatched dimension.

### Motivation Example

Problem: Add vector `v` to each row of matrix `x`.

**Inefficient approach** - explicit loop:
```python
import numpy as np

x: np.ndarray = np.array([[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13]])
v: np.ndarray = np.array([2, 1, 2])

y: np.ndarray = np.empty_like(x)
for i in range(4):
    y[i, :] = x[i, :] + v
```

**Alternative approach** - using `np.tile()`:
```python
import numpy as np

x: np.ndarray = np.array([[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13]])
v: np.ndarray = np.array([2, 1, 2])

vv: np.ndarray = np.tile(v, (4, 1))  # Stack 4 copies
y: np.ndarray = x + vv
```

**Broadcasting approach** - automatic:
```python
import numpy as np

x: np.ndarray = np.array([[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 12, 13]])
v: np.ndarray = np.array([2, 1, 2])

y: np.ndarray = x + v  # Broadcasting handles shape mismatch
```

### Broadcasting Rules

Broadcasting two arrays follows these rules:

1. If arrays differ in rank, add 1s to the lower rank array's shape until both have equal length
2. Two arrays are compatible in a dimension if they have the same size OR if one has size 1
3. Arrays can broadcast if compatible in all dimensions

**After broadcasting**: Each array acts as if it has shape matching the element-wise maximum of both original shapes. Where one array has size 1 and the other has size > 1, the first replicates along that dimension.

### Broadcasting Examples

**Example 1: Same rank, one array has size 1**
```python
import numpy as np

a: np.ndarray = np.array([1, 2, 3])     # Shape (3,)
b: np.ndarray = np.array([2])           # Shape (1,)

result = a * b  # Output: [2 4 6]

# Compatibility check:
# a: (3,)
# b: (1,) - size 1, compatible
# Result: (3,)
```

**Example 2: Different rank, prepend dimension**
```python
import numpy as np

a: np.ndarray = np.array([1, 2, 3])                    # Shape (3,)
b: np.ndarray = np.array([[4, 4, 4], [3, 3, 3]])      # Shape (2, 3)

result = a * b  # Output: [[4 8 12] [3 6 9]]

# Compatibility check:
# a: (1, 3) - prepended 1
# b: (2, 3)
# b has size 1 after prepending, compatible
# Result: (2, 3)
```

### Broadcasting Compatibility Reference

| a Shape | b Shape | Compatible | Result Shape |
|---------|---------|-----------|--------------|
| (5, 4) | (1,) | Yes | (5, 4) |
| (5, 4) | (4,) | Yes | (5, 4) |
| (15, 3, 5) | (15, 1, 5) | Yes | (15, 3, 5) |
| (15, 3, 5) | (3, 5) | Yes | (15, 3, 5) |
| (15, 3, 5) | (3, 1) | Yes | (15, 3, 5) |
| (16, 6, 7) | (16, 6) | No | - |

### Broadcasting Application 1: Centering a Dataset

**Scenario**: Gradebook with 5 students, each taking 3 exams (5×3 array).

```python
import numpy as np

# Student scores for 3 exams
scores: np.ndarray = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]])

# Calculate mean for each exam (axis=0 means along first dimension)
score_mean: np.ndarray = scores.mean(0)
print(score_mean)  # [7. 8. 9.]

# Center the scores using broadcasting
scores_centered: np.ndarray = scores - score_mean
print(scores_centered)
# [[-6. -6. -6.]
#  [-3. -3. -3.]
#  [ 0.  0.  0.]
#  [ 3.  3.  3.]
#  [ 6.  6.  6.]]

# Verify: mean of centered scores should be zero
print(scores_centered.mean(axis=0))  # [0. 0. 0.]
```

### Broadcasting Application 2: Pairwise Distances

**Goal**: Calculate Euclidean distance between all pairs of rows from two arrays.

Given:
- Array `x` shape (M, D)
- Array `y` shape (N, D)
- Euclidean distance formula: $\sqrt{(x_0 - y_0)^2 + (x_1 - y_1)^2 + ... + (x_{D-1} - y_{D-1})^2}$

**Number of distances to compute**: M × N

```python
import numpy as np

# Arrays
x: np.ndarray = np.array([[8.54, 1.54, 8.12], [3.13, 8.76, 5.29], [7.73, 6.71, 1.31]])  # (3, 3)
y: np.ndarray = np.array([[8.65, 0.27, 4.67], [7.73, 7.26, 1.95]])                      # (2, 3)

# Reshape for broadcasting
reshaped_x: np.ndarray = x.reshape(3, 1, 3)  # (3, 1, 3)
reshaped_y: np.ndarray = y.reshape(1, 2, 3)  # (1, 2, 3)

# Compute differences using broadcasting
diffs: np.ndarray = reshaped_x - reshaped_y
print(diffs.shape)  # (3, 2, 3)
# diffs[i,j] = x[i] - y[j]

# Compute distances
dists: np.ndarray = np.sqrt(np.sum(diffs**2, axis=2))  # axis=2 for column axis
print(dists.shape)  # (3, 2)
```

**Challenge Questions**:
- Can you compute pairwise distances using `np.newaxis` instead of `reshape()`?
- Can you compute pairwise distances using `np.expand_dims()`?

---

## Why NumPy Arrays are Better

### Advantages

1. **Memory Efficiency**: NumPy arrays consume significantly less memory than Python lists
2. **Speed**: NumPy arrays are faster than Python lists
3. **Convenience**: NumPy arrays are more convenient to use

### Memory Comparison

**Key Difference**:
- NumPy array: Single reference to one contiguous block of data
- Python list: Reference to block of references, each referencing a full Python object

```python
import numpy as np
import sys

# Example memory comparison
l: list = list(range(0, 1000))           # Python list
a: np.ndarray = np.arange(1000)          # NumPy array

# Python list consumes more memory
print(f"List size: {sys.getsizeof(l)} bytes")      # ~36,056 bytes
print(f"NumPy array size: {sys.getsizeof(a)} bytes")  # ~8,112 bytes
```

### Speed Comparison

```python
import numpy as np
import time as t

size: int = 1000000

# Python lists
list1: range = range(size)
list2: range = range(size)

# NumPy arrays
array1: np.ndarray = np.arange(size)
array2: np.ndarray = np.arange(size)

# List multiplication timing
start = t.time()
result_list = [(a * b) for a, b in zip(list1, list2)]
print(f"Lists time: {t.time() - start} s")      # ~0.13 seconds

# NumPy multiplication timing
start = t.time()
result_array = array1 * array2
print(f"NumPy time: {t.time() - start} s")      # ~0.006 seconds
```

### Operational Convenience

```python
import numpy as np

# Python list doesn't support element-wise operations with scalars
ls: list = [1, 2, 3]
# ls = ls + 4  # TypeError!

# NumPy array supports broadcasting
arr: np.ndarray = np.array(ls)
arr = arr + 4  # Works: [5 6 7]
```

---

## Review Questions

### Basic Concepts

1. **Q**: NumPy is a _____ for Numerical Python and is the core library for numeric and scientific computing.  
   **A**: library

2. **Q**: A NumPy array is a _____ of values, all of the same type, indexed by non-negative integers.  
   **A**: grid

3. **Q**: The _____ of an array is a tuple of integers giving size along each dimension.  
   **A**: shape

4. **Q**: NumPy arrays are created from _____ Python lists.  
   **A**: nested

5. **Q**: The function _____ creates an array of all zeros.  
   **A**: `np.zeros`

### Array Generation and Properties

6. **Q**: The function _____ creates an array of all ones.  
   **A**: `np.ones`

7. **Q**: The function _____ creates a constant array with a specified value.  
   **A**: `np.full`

8. **Q**: The _____ of an array is the number of dimensions.  
   **A**: rank

9. **Q**: NumPy arrays can be _____, enabling operations on arrays of different shapes.  
   **A**: broadcasted

10. **Q**: Broadcasting solves arithmetic between differently-shaped arrays by _____ the smaller array.  
    **A**: replicating

### Operations and Functions

11. **Q**: The dot product is the _____ of products of values in two same-sized vectors.  
    **A**: sum

12. **Q**: The output of the dot product is a _____.  
    **A**: scalar

13. **Q**: The _____ method is used to change the shape of an array.  
    **A**: reshape

14. **Q**: The _____ function allows constructing arbitrary arrays using data from another array.  
    **A**: integer array indexing

15. **Q**: The _____ function allows adding a new axis to an array.  
    **A**: `np.newaxis`

### Array Manipulation

16. **Q**: The _____ attribute of an array reverses dimensions.  
    **A**: T

17. **Q**: _____ is an important operation for AI and is the matrix version of the dot product.  
    **A**: Matrix multiplication

18. **Q**: NumPy provides many functions; one of the most useful is the _____ function.  
    **A**: sum

19. **Q**: The _____ function computes the sum of all elements in an array.  
    **A**: `np.sum`

20. **Q**: With integer array indexing, you can reuse elements allowing _____ from multiple rows.  
    **A**: selecting or mutating

### Views and Copies

21. **Q**: A _____ is a reference to original data; changes affect the original.  
    **A**: view

22. **Q**: To create a new object with same data without affecting original, use a _____.  
    **A**: copy

23. **Q**: Changes to a _____ do not affect the original object.  
    **A**: copy

---

## Practice Problems

### Array Creation and Basic Operations

1. Create array A of size 15, with all zeros
2. Find memory size of array A
3. Create array B with values ranging from 20 to 60
4. Create array C with reversed array of B
5. Create 4×4 array D with values from 0 to 15 (top to bottom, left to right)

### Array Properties and Indexing

6. Find dimensions of array E = [[3, 4, 5], [6, 7, 8]]
7. Find indices for non-zero elements from array F = [0, 3, 0, 0, 4, 0]
8. Create 3×3×3 array G with random values

### Statistical Functions

9. Find maximum values in array H = [1, 13, 0, 56, 71, 22]
10. Find minimum values in array H
11. Find mean values of array H
12. Find standard deviation of array H
13. Find median in array H

### Array Transformation

14. Transpose array D
15. Append array [4, 5, 6] to array I = [1, 2, 3]

### Mathematical Operations

16. Member-wise add, subtract, multiply and divide arrays J = [1, 2, 3] and K = [4, 5, 6]
17. Find total sum of elements of array I
18. Find natural log of array I

### Array Generation

19. Build array L = [8, 8, 8, 8, 8] using `full()` or `repeat()` function
20. Sort array M = [2, 5, 7, 3, 6]

### Indexing and Selection

21. Find indices of maximum values in array M
22. Find indices of minimum values in array M
23. Find indices of elements that would sort array M
24. Extract third column (all rows) of array O = [[11, 22, 33], [44, 55, 66], [77, 88, 99]]
25. Extract sub-array of odd rows and even columns from P = [[3, 6, 9, 12], [15, 18, 21, 24], [27, 30, 33, 36], [39, 42, 45, 48], [51, 54, 57, 60]]

### Advanced Operations

26. Find absolute value of array N = [[6, 1, 1], [4, -2, 5], [2, 8, 7]]
27. Find inverse of array N

---

## Key Terms

- **Array indexing and slicing**
- **Advanced indexing**
- **Boolean array indexing**
- **Broadcasting**
- **Dot product**
- **expand_dims**
- **Fancy indexing**
- **Integer array indexing**
- **Matrix**
- **Matrix multiplication**
- **newaxis**
- **NumPy array**
- **Rank**
- **Reshaping**
- **Shape**
- **Sum function**
- **Tensor**
- **Transpose**
- **Vector**

---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-6-collection-types/"}
---

# COMP 1023: Collections – Container Data Types (Lecture 6)

## Collections in Python

Collections are core data structures in Python that enable you to store and manage multiple items efficiently. They allow you to organize and manipulate data in various ways:

- **Lists:** Ordered, mutable collections for mixed data types.
- **Tuples:** Ordered, immutable collections, typically to group related data.
- **Sets:** Unordered collections of unique elements, ideal for membership tests and removing duplicates.
- **Dictionaries:** Ordered (insertion-preserving) collections of key-value pairs for fast lookups and storage.

Understanding these is fundamental for effective Python programming and forms the basis for working with and manipulating most data[1].

---

## Lists

### Introduction
Programs often need to store large numbers of values, e.g., reading 100 numbers and finding the average. Creating 100 variables and repetitive code is not practical. Python's `list` type solves this problem by storing sequential collections of elements.

### List Basics
A list can contain elements of any type:
```python
list1 = []  # Empty list
list2 = [2, 3, 4]
list3 = ["red", "green", "blue"]
list4 = list(range(3, 6))  # [3, 4, 5]
list5 = list("abcd")  # ['a','b','c','d']
list6 = [2, "three", 4]  # Mixed types
```

#### Indexing and Demonstration
Lists are indexed (0-based):
```python
my_list = [5.6, 4.5, 3.3, 13.2, 4.0, 34.33, 34.0, 45.45, 99.993, 11123]
# 10 elements, indexes 0–9
```

#### Common Error: Out-of-Bounds
Accessing outside the valid range causes an `IndexError`. Always use indexes from 0 to `len(my_list)–1`. Example:
```python
def main():
    my_list = [5.6, 4.5, 3.3, 13.2, 4.0]
    for i in range(len(my_list)):
        print(my_list[i])
```

---

## Sequence Operations and Comparisons

### Common Operations
- `x in s`, `x not in s`: membership
- `s1 + s2`: concatenate
- `s * n`: repeat sequence
- `s[i]`: access by index
- `s[i:j]`: slice
- `len(s)`, `min(s)`, `max(s)`, `sum(s)`
- Loops
- Comparisons: `<, <=, >, >=, ==, !=` (lexicographical)

### Comparison Operators
- `[1, 2, 3] == [1, 2, 3]` → `True`
- `[1, 2, 3] == [3, 2, 1]` → `False`
- `[1, 2] != [1, 2, 3]` → `True`
- Comparison uses element-by-element comparison until first difference[1].

---

## List Functions and Methods

### Functions for Lists
Examples:
```python
my_list1 = [1, 2, 3, 4, 5]
my_list2 = [4, 5, 6, 7, 8]
4 in my_list1            # True
len(my_list1)            # 5
min(my_list1)            # 1
max(my_list1)            # 5
sum(my_list1)            # 15
my_list1 + my_list2      # Concatenation
my_list1 * 2             # Repetition
my_list1 < my_list2      # True
```

### The Index Operator
Access elements using `my_list[index]` (0-based):
```python
my_list[2] = my_list[0] + my_list[1]
for i in range(len(my_list)):
    my_list[i] = i
```

---

## Negative Indexing and Slicing

### Negative Indexes
Allows referencing from the end of the list:
```python
my_list = [2, 3, 5, 2, 33, 21]
my_list[-1]  # 21 (last item)
my_list[-3]  # 5 (third from end)
```

### List Slicing
Syntax: `my_list[start:end:step]` (step defaults to 1):
```python
my_list[2:4]     # [5, 7]
my_list[0:5:2]   # [2, 5, 9]
my_list[1:-3]    # [3, 5]
my_list[-4:-2]   # [5, 7]
my_list[1:3] = [91, 92, 93, 94]  # Assignment to a slice
```
Slicing gracefully handles out-of-range indexes.

---

## List Comprehensions

**List comprehensions** provide concise syntax for creating a list from another sequence:
```python
list1 = [x for x in range(5)]           # [0, 1, 2, 3, 4]
list2 = [0.5 * x for x in list1]        # [0.0, 0.5, 1.0, 1.5, 2.0]
list3 = [x for x in list2 if x < 1.5]   # [0.0, 0.5, 1.0]
```

---

## List Methods

| Method        | Description                                            |
|-------------- |-------------------------------------------------------|
| append(x)     | Adds element to end                                   |
| count(x)      | Count occurrences                                     |
| extend(list2) | Appends elements of another list                      |
| index(x)      | First index of x                                      |
| insert(i, x)  | Insert x at index i                                   |
| pop(index)    | Remove and return element at index (default last)     |
| remove(x)     | Remove first occurrence of x                          |
| reverse()     | Reverse list in-place                                 |
| sort()        | Sort list in ascending order                          |

Examples:
```python
list1.append(19)
list1.pop(2)
list1.remove(32)
list1.sort(reverse=True)
```

---

## Splitting Strings and Inputting Lists

Split string characters into a list:
```python
my_list = list("abc")  # ['a', 'b', 'c']
```
Use `.split()` to split a string by delimiter:
```python
items1 = "COMP1023 is the best COMP course".split()
items2 = "12/25/2025".split("/")
```

**Inputting lists:**
```python
def main():
    my_list = []
    for i in range(10):
        my_list.append(float(input()))
    average = sum(my_list) / len(my_list)
    print("Average =", average)
```
Or as a one-liner using comprehension:
```python
def main():
    s = input("Enter 10 numbers separated by spaces: ")
    my_list = [float(x) for x in s.split()]
    average = sum(my_list) / len(my_list)
    print("Average =", average)
```

---

## Real-World Use: Mapping Month Numbers

Use a list for mappings:
```python
months = ["January", "February", ..., "December"]
monthNumber = int(input("Enter month 1 to 12: "))
if 1 <= monthNumber <= 12:
    print("Month is", months[monthNumber-1])
else:
    print("Invalid month number!")
```

---

## Copying Lists – Shallow vs Deep Copy

- `list2 = list1` **does not copy the list**; both names refer to the same object.
- To copy a list:
  - Shallow copy: `list2 = list1.copy()`, `list2 = list1[:]`, `list2 = list(list1)`, `list2 = [x for x in list1]`, `list2 = [] + list1`
  - Deep copy: `import copy; list2 = copy.deepcopy(list1)`

**Shallow Copy**: Copies only outermost list; nested lists are shared.
**Deep Copy**: Full recursive copy; changes in nested structure do not affect the source.

---

## Two-Dimensional and Multidimensional Lists

- 2D list: a list of rows; use `matrix[i][j]` to access elements.
- Example:
```python
matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 0, 0, 0],
  ...
]
```
- Sum all elements:
```python
total = 0
for row in matrix:
    for value in row:
        total += value
```
- Sum elements by column:
```python
for column in range(len(matrix[0])):
    total = 0
    for row in matrix:
        total += row[column]
```

- Multidimensional lists are possible for n > 2; e.g., tracking scores by student, exam, component.

---

## Key Terms
- List
- List comprehension

---

## Review Questions (Highlighted & Expanded)

Review questions test core skills; be able to answer and expand on these:

1. **Which built-in functions can be used with lists?**
   - `len()`, `max()`, `min()`, `sum()`
2. **How do you reference elements?**
   - Using the index operator `[]` (works on lists & tuples; 0-based)
3. **What is the first index?**
   - 0 (programmers sometimes mistakenly use 1)
4. **List sequence operations?**
   - Concatenation with `+`, repetition with `*`, slicing with `[:]`, membership with `in`/`not in`
5. **Which object is mutable? Which methods add/remove elements?**
   - List is mutable. Methods: `append`, `insert`, `pop`, `remove`
6. **How do you split a string into a list?**
   - `split()` method

### Expansion
- Practice using and combining these functions and operators in practical code examples.
- Understand errors in usage (e.g., off-by-one errors, misunderstanding mutability, copying)
- Master list comprehensions for concise, readable transformations
- Differentiate shallow vs deep copying especially for nested collections

---

## Further Reading
- Textbook: "Introduction to Python Programming and Data Structures", Chapters 7 & 14

---
---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-2-basic-python-elements/"}
---

# Basic Programming Language Elements (COMP 1023)

## Part I: Python Fundamentals

### Writing a Simple Python Program
A simple Python program can set a circle's radius, compute the area with the formula `area = PI * radius * radius`, and display the result:
```python
# Filename: compute_area.py
def main():
    radius = 20
    PI = 3.14159
    area = PI * radius * radius
    print("The area for the circle of radius", radius, "is", area)
if __name__ == "__main__":
    main()
```
Output: `The area for the circle of radius 20 is 1256.636`

### Comments
- Comments improve program readability but are ignored by computers.
- Single-line comments start with `#`
- Multi-line comments can use triple quotes (`'''` or `"""`).

### main() and Program Entry Point
- `main()` is the typical entry point for Python programs.
- Python executes code top to bottom, and will call `main()` if `if __name__ == "__main__":` is true.
- Using `main()` is good practice, but not required.

### Comparison: With vs Without main()
- Both approaches can work the same when running a script directly.
- Using `main()` improves organization, especially as code becomes more complex or used as a module.

### Writing a Python Program: Statement Types
1. Typical statements: creating objects, assignments, function calls
2. Branching/selective statements: `if..else`, `match..case`
3. Looping/iterative statements: `for`, `while`

---
## Part II: Basic Elements of Python Programming

### Basic Data Types, Variables & Literals
- Python manages data using objects. Variables reference objects.
- Six basic data types and five container types:
  - int, float, complex, bool, str, None
  - list, tuple, dict, set, frozenset

#### Data Types Table
| Name | Type      | Description                                      |
|------|-----------|--------------------------------------------------|
| Int  | int       | Whole numbers (3, 200)                           |
| Float| float     | Decimal numbers (4.3, 100.0, 2.23e-3)            |
| Complex| complex | Complex numbers (1+2j)                           |
| Boolean| bool    | Logical (True, False)                            |
| String| str      | Sequences of characters ("Hello", 'X')           |
| None | None      | Absence of value                                 |
| List | list      | Ordered collection ([10, "Hello"])              |
| Tuple| tuple     | Ordered, immutable collection (("a","b"))       |
| Dict | dict      | Key-value pairs (ordered since Python 3.7)       |
| Set  | set       | Unordered unique objects                         |
| Frozen Set|frozenset | Immutable set                                 |

#### type() function
Returns the class type of the given object:
```python
type(5) # <class 'int'>
```

#### Literal Types
Six basic literal types:
- Integer (e.g., 42)
- Float (e.g., 7.35)
- Complex (e.g., 1+2j)
- Boolean (True/False)
- String (e.g., 'a', "Alex")
- None

#### True or False
- Python uses `1` for `True` and `0` for `False`.
- Conversion functions:
  - `int(True)` is `1`, `int(False)` is `0`
  - `bool(0)` is `False`, `bool(4)` is `True`

#### String Conventions
- Single quotes for one character, double quotes for more than one.

### Object Creation, Variables, and References
- Assignment creates objects and gives variables as references.
- Multiple assignments are supported:
  ```python
  x, y = 3, 4
  ```
- Variable naming rules:
  1. Start with a letter or `_`, not a digit.
  2. Can contain letters, digits, underscores.
  3. No special characters, spaces, or reserved keywords.
  4. No length limit.

#### Reserved Keywords
Cannot be used as variable names. (Examples: `and`, `if`, `import`, `return`, `None`, `True`, etc.)

#### Example: Object Creation
```python
def main():
    my_age = 18
    course1, course2, course3 = 1023, 2011, 2012
    print(my_age)
if __name__ == "__main__":
    main()
```

#### Dynamic Typing in Python
- Variables can refer to any type and can change type.
- Pros: Flexibility.
- Cons: Potential runtime errors.

#### Type Hinting
- Syntax: `x: int = 10`
- Not enforced at runtime, but aids readability and analysis.

#### Case Sensitivity
- Python treats variables with different casing as different.
- Use meaningful names for clarity.

#### Named Constants
- Represent permanently fixed data.
- Use all uppercase (e.g., `PI = 3.14159`) by convention.

#### Explicit Type Conversion
- Convert between types, e.g., `int("10")`, `float(5)`

#### Naming Conventions
- Variables: lower case, separate words with underscores (snake_case)
- Constants: upper case with underscores
- Files: lowercase with underscores

#### Mutability
- Mutable types: lists, dicts, sets
- Immutable types: int, float, complex, bool, str, tuple, frozenset, None

#### Random Number Generation
- Use `random` module (`random.random()`, `random.randint(a, b)`, etc.)
- Set seed for reproducibility: `random.seed(42)`

---
## Part III: Basic Python Input and Output

### Standard Output: `print()`
- Print data to screen.
- Syntax: `print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)`
- `sep`: separator string; `end`: end-of-print character
- f-strings allow variable interpolation:
  ```python
  print(f"Name: {name}")
  ```

#### Example: Custom `end` and `sep`
```python
print(1, 0, 2, 3, sep='-', end='*')
```

#### Printing Multiline and Long Texts
- Use triple quotes for multiline text.
- Use `\` for continued lines.

### Standard Input: `input()`
```python
age = input("Enter your age: ")    # Always returns a string
age = int(age) + 1
print("Next year, you will be", age)
```

---
## Indentation and Good Programming Style
- Indentation is required and enforced in Python (IndentationError for errors).
- Use one statement per line (semicolon to combine is possible but discouraged).
- Use blank lines and proper comments for clarity.
- Use `main()` for structure.
- Type hint for readability.
- Use snake_case for variables, UPPER_CASE for constants.

---
## Key Terms
- Boolean, Case-sensitive, Comments, Data types, Floating point, Indentation, Identifiers, Immutable, Initialization, Integer, Literals, Mutable, Named constants, Objects, Reserved words, Snake case, String, Type conversion, Type hinting, Variables

---
## Review Questions (Expanded)
Focus: Reinforcement of the key ideas.

1. **Comments** are for human readability and use `#` or triple quotes.
2. **main()** is the entry point for a Python script.
3. **Objects** store data, created via **assignment** to a variable (the reference).
4. **Identifiers**: Names for program elements; consist of letters, digits, underscores; cannot start with a digit or be a reserved word.
5. **Literals**: Actual fixed values in code (number, string, etc.).
6. Type hinting uses colon `:` (e.g., `x: int = 10`).
7. **Named constants** are fixed data values, conventionally UPPERCASE.
8. Use `print()` for output, `sep` and `end` as format parameters.
9. Use `input()` for input and conversion functions like `int()` or `float()`.
10. Variable names with multiple words use underscores (**snake_case**).
11. **Indentation** is required—misalignment causes syntax errors.

---
## Further Reading
- Refer to textbook “Introduction to Python Programming and Data Structures”, Sections 2.1-2.8, 2.12, for more details.

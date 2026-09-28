---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-3-python-operations/"}
---

# COMP 1023 Lecture 3: Python Basic Operations

## Introduction

This lecture discusses the basic operations that Python programs can perform, building on previous knowledge of Python program structure and the use of variables to store data. Key topics are arithmetic operations, relational (comparison) operations, logical operations, and other common operations.

## Part I: Arithmetic Operations

### Basic Arithmetic Operators
Python supports the following arithmetic operations:

| Symbol   | Operation       | Example      | Result |
|----------|----------------|--------------|--------|
| `+`      | Addition        | 34 + 1       | 35     |
| `-`      | Subtraction     | 34.0 - 0.1   | 33.9   |
| `*`      | Multiplication  | 300 * 30     | 9000   |
| `/`      | Float Division  | 1 / 2        | 0.5    |
| `//`     | Integer Division| 1 // 2       | 0      |
| `**`     | Exponentiation  | 4 ** 0.5     | 2.0    |
| `%`      | Remainder       | 20 % 3       | 2      |

- These are called **arithmetic operators**. The numbers they operate on are called **operands**.
- Improving readability: underscores can be used in numeric literals (e.g., `value = 2_324_545_19`), but must appear between digits.

### Type Conversion in Arithmetic
- If either operand is a `float`, the result is a `float`.
- For `/`, the result is always a `float`.
- Python automatically converts `int` to `float` as needed (implicit type conversion).

### Integer Division (`//`)
- Returns the largest integer less than or equal to the result (the "floor").
- Example: `5 // 2` is `2`, `5.0 // 2` is `2.0`, `5.5 // -2` is `-3.0`.

### Exponentiation (`**`)
- E.g. `2 ** 3` is `8`, `4.0 ** 0.5` is `2.0`. Negative powers and nested powers are supported.
- Example: `2 ** 3 ** 2` evaluates as `2 ** (3 ** 2)` = `2 ** 9` = `512` (right-to-left associativity).

### Modulo Operation (`%`)
- Returns the remainder after division.
- Useful for checking even/odd (`n % 2`), getting digits (`n % 10`), etc.

### Practical Example: Modulo and Time Display
```python
# Displaying time in minutes and seconds
seconds = int(input('Enter seconds: '))
minutes = seconds // 60
remaining_seconds = seconds % 60
print(f'{seconds} seconds is {minutes} minutes and {remaining_seconds} seconds')
```

### Subtraction and Negation
- `-` is for subtraction (`10 - 20`) or unary negation (`-3`).

### Division by Zero
- Division (`/`), integer division (`//`), and modulo (`%`) by zero raise `ZeroDivisionError`.
- Exponentiation `0 ** 0` is defined as `1`.

### Expressions and Evaluation
- Expressions combine values and operations to produce a result.
- Example: `(3 * 7) + (4 * 4) + 8` evaluates to `45`.

### Precedence of Arithmetic Operators
1. Exponentiation (`**`) first
2. `*`, `/`, `//`, `%` next, left-to-right
3. `+`, `-` last, left-to-right
- Parentheses can override default precedence.

### Arithmetic Operations on Variables
- Operators apply the same way to variables as to literals.
- Example: `a, c = 10, 22; b, d = 20.1, 18.9`
- Precision errors can occur with floating point math.

## Part II: Assignment Operation

### Assignment Syntax
- Assign value: `x = 3`
- Cascading: `x = y = 1`
- Simultaneous: `x, y = 3, 4`

### Common Confusion
- `x = x + 1` assigns a new value, not a mathematical equation.
- Make sure variables are initialized before increment.

### Example
```python
# BMI calculation with updated values
weight, height = 195, 70
bmi = weight / (height * height) * 703
print('Previous BMI:', bmi)
weight = 180
bmi = weight / (height * height) * 703
print('Current BMI:', bmi)
```

### Simultaneous and Cascading Assignments
- `x, y = 10, 20` assigns both at once.
- `i = j = k = 1` assigns all three to `1`.

### Swapping Variables
- Idiom: `x, y = y, x` swaps two variables in Python.
- Involves tuple packing on right, unpacking on left.

### Augmented Assignment Operations
Operator shortcuts:
- `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`
Example: `x += 5` is equivalent to `x = x + 5`.

## Part III: Relational (Comparison) Operations

### Relational Operators
| Operator | Meaning           | Example      | Result   |
|----------|-------------------|--------------|----------|
| `<`      | Less than         | `5 < 0`      | False    |
| `<=`     | Less or equal     | `5 <= 0`     | False    |
| `>`      | Greater than      | `5 > 0`      | True     |
| `>=`     | Greater or equal  | `5 >= 0`     | True     |
| `==`     | Equal to          | `5 == 0`     | False    |
| `!=`     | Not equal to      | `5 != 0`     | True     |
- Results are always Boolean (`True` or `False`).
- Applicable to numbers and strings (compared lexicographically via ASCII).

## Part IV: Logical Operations

### Logical Operators
| Operator | Description          |
|----------|---------------------|
| `not`    | Logical negation    |
| `and`    | Logical conjunction |
| `or`     | Logical disjunction |

- Combine or invert Boolean values. For example:
  - `in_range = (3 <= x <= 10)`
  - `non_zero = (x != 0)` or `non_zero = not (x == 0)`

### Truth Table
| p     | q     | p and q | p or q | not p |
|-------|-------|---------|--------|-------|
| True  | True  | True    | True   | False |
| True  | False | False   | True   | False |
| False | True  | False   | True   | True  |
| False | False | False   | False  | True  |

### Example: Leap Year
```python
year = int(input('Enter a year: '))
is_leap_year = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
print(f'{year} is a leap year? {is_leap_year}')
```

### Short Circuiting
- In `or`, if the first is True, second not evaluated.
- In `and`, if first is False, second not evaluated.
- Example: `print(True or 2/0)` prints `True`, and does not error.

### Chained Comparisons
- Python allows expressions like `5 > x > 3`, equivalent to `(5 > x) and (x > 3)`.

## Part V: Other Operations

### Identity Operators
- `is`: True if both variables refer to same object (by identity).
- `is not`: True if they do NOT refer to same object.
- Python caches small integers (`-5` to `256`), so `a = 1; b = 1; (a is b)` is `True`.
- Larger integers may or may not be cached by Python implementation.

### Membership Operators
- `in`: True if value is in collection (string/list/etc.)
- `not in`: True if value not in collection.

### Associativity of Operators
- Most are left-to-right, except `**` (right-to-left).
- Table (high precedence to low):
  - `**` (right), unary `+` `-` (right), `*`, `/`, `//`, `%` (left), `+`, `-` (left), comparison ops, `is`, `in`, `not`, `and`, `or`, assignment ops (right)

### Floating Point Errors
- Arise due to limited number precision (typically 15-17 digits).
- Example: `0.1 + 0.2` may not exactly equal `0.3`.
- Use `math.isclose()` for comparison, or `decimal.Decimal` for high-precision math.

### Common Pitfalls
- Using `=` instead of `==` (assignment vs. equality).
- Misunderstanding operator precedence.
- Using `is` for value equality (should use `==`), except for `None`.

## Key Terms

- Arithmetic, assignment, augmented assignment, cascading assignment, evaluation, expression, exponentiation, identity, integer division, logical, membership, modulo, negation, operand, operator, precedence, relational, short-circuit, simultaneous assignment, syntactic sugar, truth table

## Review Questions (highlighted for emphasis and elaboration)

1. In Python, three main types of operations are __arithmetic__, __relational__, and __logical__.
2. +, -, *, /, //, **, % are called __operators__, and their arguments are __operands__.
3. An `int` is converted to `float` if either operand is a float.
4. `//` is used for __integer division__.
5. `**` is for __exponentiation__.
6. `%` is the __modulo__ operator, for the __remainder__.
7. `-` is both a binary operator (subtraction) and a unary operator (negation).
8. An __expression__ is any value or computation that produces a value.
9. Parentheses can force evaluation order.
10. Assignment operator (`=`) assigns a value.
11. Operator precedence and parentheses determine evaluation order.
12. Augmented assignment: `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`
13. Relational operators: `<`, `<=`, `==`, `!=`, `>`, `>=` yield Boolean results.
14. `1` is True, `0` is False in Boolean logic.
15. Non-zero is True, zero is False in a Boolean context.
16. `and`, `or`, `not` are logical operators.
17. Short-circuiting halts as soon as the result is decided.
18. `and` is evaluated before `or`.
19. Identity operators check object identity.
20. Membership operators check if element is in/out of a collection.

## Further Reading
Consult sections 2.5-2.6, 2.8-2.12, 3.2, 3.10, and 3.15 of the textbook “Introduction to Python Programming and Data Structures” for more details.

## Understanding Assignment Operator Associativity
For cascading assignments like `x = y = 1`, Python evaluates from right to left by storing the value first, then assigning to each variable. This differs from some other languages; Python assigns the same value to each variable.

---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/Lecture-12-oop/"}
---

# COMP 1023: Introduction to Object-Oriented Programming

## Introduction

In Python, **everything is an object**, including numbers, strings, and other data types. Every object has three fundamental characteristics:

- **Identity**: Each object has a unique identifier assigned by Python
- **Type**: Describes what kind of object it is
- **Value**: The actual data the object holds

### Inspecting Object Properties

Python provides two essential functions for examining objects:

- `id()` - Returns the unique identifier of an object
- `type()` - Returns the type of an object

#### Example:

```python
n: int = 3
print(id(n))       # Print 10757800
print(type(n))     # Print <class 'int'>

f: float = 3.0
print(id(f))       # Print 132217225311216
print(type(f))     # Print <class 'float'>

s: str = "Welcome"
print(id(s))       # Print 132216813314032
print(type(s))     # Print <class 'str'>
```

---

## Object-Oriented Programming

**Object-Oriented Programming (OOP)** is a paradigm that involves using objects to create programs. An object represents an entity in the real world that can be distinctly identified.

### Examples of Objects
- A student
- A desk
- A circle

### Key Characteristics of Objects

#### 1. Identity
Python assigns each object a **unique ID** for identifying the object at runtime. This ID distinguishes one object from another.

#### 2. States (Attributes)
The characteristics of an object are represented by **instance variables**. These variables store the data associated with the object.
- Example: `radius` of a circle object

#### 3. Behaviors (Methods)
Actions performed by the object are implemented through **methods** (which are functions defined within a class). These define what the object can do.
- Example: `getArea()` method for circle objects

### Classes as Templates

A **Python class** serves as a **template, blueprint, and contract** for creating objects. It defines:
- The data fields (properties) that objects will have
- The methods (behaviors) that objects can perform

---

## Class and Object

### Definition

A **class** is a user-defined data type from which objects are created. It provides a means of **bundling data (instance variables) and functionality (methods) together**.

### Key Components

#### Instance Variables
- Variables that **belong to an object**
- **Public by default** and can be accessed using the dot (`.`) operator
- Each instance has its own copy of instance variables
- Used to store the state of an object

#### Instance Methods
- Defined with an **extra first parameter named `self`**
- **No value is given for `self`** when calling the method; Python provides it automatically
- Instance variables and methods are accessed using the object (through the dot operator)

#### The `__init__` Method (Initializer)
- A special method used to **initialize the instance variables** of objects
- Called automatically when an object is created
- Used to set up the initial state of an object

### Objects as Instances
**Objects are instances of a class**. When you create an object, you are creating an instance of the class that follows the blueprint defined by the class.

---

## Defining Classes

### Syntax

```python
class <class-name>:
    # __init__ is an initializer
    def __init__(self, <argument-list1>):
        self.<instance-variable-name1> = <value1>
        self.<instance-variable-name2> = <value2>
        ...
    
    def <method1-name>(self, <argument-list2>):
        <method1-statements>
    
    def <method2-name>(self, <argument-list3>):
        <method2-statements>
    ...
```

### Parameter Descriptions

| Parameter | Description |
|-----------|-------------|
| `<class-name>` | The name of the class |
| `<method1-name>`, `<method2-name>`, ... | Instance method names |
| `<argument-list1>`, `<argument-list2>`, `<argument-list3>`, ... | Instance method parameters (i.e., variables) |
| `<instance-variable-name1>`, `<instance-variable-name2>`, ... | Instance variable names |
| `<value1>`, `<value2>`, ... | Values assigned to the instance variables |
| `<method1-statements>`, `<method2-statements>`, ... | Python statements that make up the method bodies |

---

## Creating Objects, Calling Methods, and Modifying Instance Variables

### Overview

- An **object is created in memory** using a **constructor** for the class
- The class's `__init__` method is then called **automatically** to initialize the object
- Note: In Python, a constructor is technically created using the `__new__` method (not covered in this course)

### Syntax

```python
<object-name> = <class-name>(<arguments>)              # Create an object with a constructor
<object-name>.<instance-method-name>(<arguments>)      # Call a method
<object-name>.<instance-variable-name> = <value>       # Modify an instance variable
```

### Parameter Descriptions

| Parameter | Description |
|-----------|-------------|
| `<object-name>` | The name of the variable that holds the object |
| `<class-name>` | The name of the class to instantiate |
| `<arguments>` | The values passed to the constructor or method |
| `<instance-method-name>` | The name of the instance method to call |
| `<instance-variable-name>` | The name of the instance variable to modify |
| `<value>` | The value assigned to the instance variable |

---

## Object Instantiation (Practical Example)

### The Circle Class Example

Let's consider a practical example that demonstrates all the key concepts:

```python
# Filename: circle.py
import math

class Circle:
    # Define a new type Circle
    def __init__(self, radius: float):
        # Define an initializer with parameter: radius
        self.radius: float = radius
        # Define an instance variable radius and assign it with the parameter value
    
    def area(self) -> float:
        # Define the instance method: area
        return math.pi * self.radius ** 2
        # Compute and return the area of the circle
    
    def circumference(self) -> float:
        # Define the instance method: circumference
        return 2 * math.pi * self.radius
        # Compute and return the circumference of the circle

def main() -> None:
    # Define the main function
    circleObj = Circle(10)
    # Create an object of Circle named circleObj with radius 10
    
    circleObj.radius = 100
    # Modify circleObj's radius to 100
    
    print("Area:", circleObj.area())
    # Call area() method
    
    print("Circumference:", circleObj.circumference())
    # Call circumference() method

if __name__ == "__main__":
    main()
```

#### Output:
```
Area: 31415.926535897932
Circumference: 628.3185307179587
```

### Step-by-Step Breakdown

1. **Class Definition**: The `Circle` class is defined with an initializer and two methods
2. **Object Creation**: `circleObj = Circle(10)` creates a new Circle object with radius 10
3. **Instance Variable Modification**: `circleObj.radius = 100` changes the radius to 100
4. **Method Calls**: The `area()` and `circumference()` methods are called on the object

---

## Understanding the `self` Parameter

### What is `self`?

**`self` is a parameter that references the object itself.** It acts as a reference to the specific instance of the class on which the method is being called.

### How Does `self` Work?

- When a method is called on an object, **`self` is automatically set to that object**
- Using `self`, you can **access the object's members (attributes and methods)** within a class definition
- You never explicitly pass a value for `self` when calling a method; Python handles this automatically

### Importance

`self` is crucial for:
- Accessing instance variables within methods
- Calling other methods from within a method
- Distinguishing between instance variables and local variables

---

## Scope of Instance Variables

Instance variables declared and initialized in the `__init__` method are **accessible throughout the lifetime of the object**. They persist as long as the object exists in memory. Any method within the class can access and modify instance variables through the `self` reference.

---

## Copying Objects: Understanding References vs. Deep Copies

### The Problem: Shallow Copying

When dealing with objects, it's critical to understand the difference between **copying a reference** and **copying the actual object**.

#### Example of Shallow Copy (Reference Assignment):

```python
# Filename: circle_shallow_copy.py
import math

class Circle:
    def __init__(self, radius: float):
        self.radius: float = radius
    
    def area(self) -> float:
        return math.pi * self.radius ** 2
    
    def circumference(self) -> float:
        return 2 * math.pi * self.radius

def main() -> None:
    circleObj1: Circle = Circle(10)
    circleObj2: Circle = Circle(20)
    circleObj1 = circleObj2

if __name__ == "__main__":
    main()
```

#### What Happens

- `circleObj1` and `circleObj2` are initially **two separate Circle objects** in memory
- When you execute `circleObj1 = circleObj2`, this **copies the reference** of `circleObj2` to `circleObj1`, **not the actual object contents**
- After this assignment, both variables point to the **same object in memory**
- The original `circleObj1` (with radius 10) is now orphaned and will be garbage collected

### The Solution: Deep Copying

To actually copy the data from one object to another, you must **explicitly copy the instance variables**:

```python
# Filename: circle_deep_copy.py
import math

class Circle:
    def __init__(self, radius: float) -> None:
        self.radius: float = radius
    
    def area(self) -> float:
        return math.pi * self.radius ** 2
    
    def circumference(self) -> float:
        return 2 * math.pi * self.radius

def main() -> None:
    circleObj1: Circle = Circle(10)
    circleObj2: Circle = Circle(20)
    
    # Deep copy: explicitly copy the instance variable value
    circleObj1.radius = circleObj2.radius
    
    print("Circle 1 radius:", circleObj1.radius)
    print("Circle 1 area:", circleObj1.area())
    print("Circle 1 circumference:", circleObj1.circumference())

if __name__ == "__main__":
    main()
```

#### Output:
```
Circle 1 radius: 20
Circle 1 area: 1256.6370614359173
Circle 1 circumference: 125.66370614359172
```

### Key Takeaway

- **Reference assignment** (`obj1 = obj2`) makes both variables point to the same object
- **Deep copying** (`obj1.attribute = obj2.attribute`) creates independent copies of data
- Understanding this distinction is crucial for avoiding unexpected behavior when working with objects

---

## UML (Unified Modeling Language) Diagram

A **UML class diagram** is a standardized way to represent a class and its members visually. It shows the structure of a class in a clear, organized format.

### UML Notation

```
┌─────────────────────────┐
│      ClassName          │
├─────────────────────────┤
│ dataFieldName: Type     │
├─────────────────────────┤
│ +ClassName(params)      │
│ +methodName(params):    │
│  returnType             │
└─────────────────────────┘
```

### Components

- **Data field**: `dataFieldName: dataFieldType`
- **Constructors**: `ClassName(parameterName: parameterType)`
- **Methods**: `methodName(parameterName: parameterType) : returnType`

### Important Note

The `__init__` method **does not need to be listed** in the UML diagram, as it is implicitly understood to be present in all Python classes.

---

## Public, Private, and Protected Members

### Access Control in Python

By default, all members in a Python class are **public**, meaning any member can be accessed from outside the class. However, you can restrict access to members by making them protected or private.

### Protected Members

- **Definition**: Accessible from within the class and also available to its subclasses (subclasses not covered in this course)
- **Convention**: Prefix with a **single underscore** `_`
- **Example**: `_instance_variable`
- Signals to other programmers that the member should not be accessed externally

### Private Members

- **Definition**: Accessible **only from within the class**
- **Convention**: Prefix with a **double underscore** `__`
- **Example**: `__instance_variable`
- Strongly signals that the member is for internal use only

### Important Note on Conventions

The terms "by convention" mean that the responsible programmer **should refrain** from accessing and modifying instance variables prefixed with `_` or `__` from outside their class. However, if they do so, it will still work! Modern IDEs like VS Code and PyCharm yield a warning when you do so, but Python does not prevent it at runtime.

---

## Name Mangling: Python's Mechanism for Private Variables

### What is Name Mangling?

**Name mangling** is a mechanism that the Python interpreter uses to modify the names of class attributes that begin with double underscores (`__`).

### How It Works

When an attribute name **starts with two underscores (but does not end with two underscores)**:
- Python internally **changes the name** by adding a single underscore and the class name as a prefix
- **Example**: An attribute named `__myattribute` in a class named `MyClass` becomes `_MyClass__myattribute`
- This mangling is done **at the time of object creation**
- The mangled name is used **internally by the interpreter**

### Important Clarifications

- **Name mangling does not provide true privacy** - it's a convention, not a security feature
- **It's not a security mechanism** - determined programmers can still access mangled names
- **Purpose**: Avoid naming conflicts in class hierarchies and encourage responsible code practices

### Example:

```python
class Person:
    def __init__(self, name: str):
        self.__name = name

# Python internally converts this to:
# self._Person__name = name
```

---

## Practical Example: Person Class with Private Variables

### Problem Without Accessors/Mutators

```python
# Filename: person.py
class Person:
    def __init__(self, name: str = "Tom",
                 age: int = 18,
                 gender: str = 'M') -> None:
        # private instance variables
        self.__name: str = name
        self.__age: int = age
        self.__gender: str = gender
    
    def print_info(self) -> None:
        print("--- Print Person ---")
        print("Name: " + self.__name)
        print("Age: " + str(self.__age))
        print("Gender: " + self.__gender)

def main() -> None:
    desmond = Person("Haha", 18, "M")
    
    # These will raise AttributeError because __name is private
    # print(f"Name: {desmond.__name}")  # Error
    # print(f"Age: {desmond.__age}")    # Error
    # print(f"Gender: {desmond.__gender}")  # Error
    
    # These create NEW instance variables instead of modifying private ones
    desmond.__name = "Desmond"     # Creates a new public __name variable!
    desmond.__age = 19              # Creates a new public __age variable!
    desmond.print_info()            # Still prints original values!

if __name__ == "__main__":
    main()
```

### How Name Mangling is Applied

After Python applies name mangling, the code actually becomes:

```python
class Person:
    def __init__(self, name: str = "Tom",
                 age: int = 18,
                 gender: str = 'M') -> None:
        self._Person__name: str = name
        self._Person__age: int = age
        self._Person__gender: str = gender
    
    def print_info(self) -> None:
        print("--- Print Person ---")
        print("Name: " + self._Person__name)
        print("Age: " + str(self._Person__age))
        print("Gender: " + self._Person__gender)

def main() -> None:
    desmond = Person("Haha", 18, "M")
    
    # Still won't work as expected without accessors/mutators
    desmond.__name = "Desmond"
    desmond.__age = 19
    desmond.print_info()

if __name__ == "__main__":
    main()
```

---

## Accessors and Mutators: Controlled Access to Private Variables

### Overview

**Accessor and mutator methods** are used to access and modify protected/private instance variables that cannot be accessed directly from outside the class.

### Accessor Methods (Getters)

- **Purpose**: Retrieve the values of instance variables
- **Return Type**: Returns the value of the private instance variable
- **Naming Convention**: Often prefixed with `get` (e.g., `getName()`)
- **Usage**: Called when you need to read the current value of a private variable

### Mutator Methods (Setters)

- **Purpose**: Modify the values of instance variables
- **Effect**: Updates the value of the private instance variable
- **Naming Convention**: Often prefixed with `set` (e.g., `setName()`)
- **Usage**: Called when you need to change the value of a private variable
- **Benefit**: Can include validation logic to ensure only valid values are set

---

## Complete Example: Person Class with Accessors and Mutators

```python
# Filename: person_w_accessors_mutators.py
class Person:
    def __init__(self, name: str = "Tom",
                 age: int = 18,
                 gender: str = 'M') -> None:
        self.__name: str = name
        self.__age: int = age
        self.__gender: str = gender
    
    # ===== ACCESSORS (Getters) =====
    
    def getName(self) -> str:
        """Accessor for name"""
        return self.__name
    
    def getAge(self) -> int:
        """Accessor for age"""
        return self.__age
    
    def getGender(self) -> str:
        """Accessor for gender"""
        return self.__gender
    
    # ===== MUTATORS (Setters) =====
    
    def setName(self, name: str) -> None:
        """Mutator for name"""
        self.__name = name
    
    def setAge(self, age: int) -> None:
        """Mutator for age"""
        self.__age = age
    
    def setGender(self, gender: str) -> None:
        """Mutator for gender"""
        self.__gender = gender
    
    # ===== OTHER METHODS =====
    
    def print(self) -> None:
        print("--- Print Person ---")
        print("Name: " + self.__name)
        print("Age: " + str(self.__age))
        print("Gender: " + self.__gender)

def main() -> None:
    desmond = Person("Haha", 18, "M")
    
    # Using accessors to retrieve values
    print("Name: " + desmond.getName())
    print("Age: " + str(desmond.getAge()))
    print("Gender: " + desmond.getGender())
    
    # Using mutators to modify values
    desmond.setName("Desmond")
    desmond.setAge(19)
    desmond.print()

if __name__ == "__main__":
    main()
```

### Benefits of Accessors and Mutators

1. **Controlled Access**: You can verify and validate data before modification
2. **Encapsulation**: Hides internal implementation details
3. **Flexibility**: You can change the internal representation without affecting external code
4. **Monitoring**: You can add logging or other behaviors when variables are accessed or modified

---

## Key Terminology Summary

| Term | Definition |
|------|-----------|
| **Accessor (Getter)** | Method that retrieves the value of a private instance variable |
| **Attribute** | Synonym for instance variable; a property of an object |
| **Behavior** | Actions that objects can perform; implemented through methods |
| **Class** | A user-defined data type that serves as a template for objects |
| **Constructor** | Special method used to create and initialize objects |
| **Dot operator (.)** | Used to access members of an object or class |
| **Initializer** | The `__init__` method; initializes instance variables |
| **Instance** | An individual object created from a class |
| **Instance variable** | A variable that belongs to an object; stores state |
| **Instance method** | A method that operates on an instance of a class |
| **Instantiation** | The process of creating an object from a class |
| **Mutator (Setter)** | Method that modifies the value of a private instance variable |
| **Object-Oriented Programming (OOP)** | Programming paradigm based on organizing code into objects and classes |
| **Private** | Access level where members are only accessible within the class |
| **Protected** | Access level where members are accessible within the class and subclasses |
| **Public** | Access level where members are accessible from anywhere |
| **Unified Modeling Language (UML)** | Standardized notation for representing class structures |

---

## Review Questions and Key Focus Areas

### Question 1: Classes and Initializers
**A ___ is a template, a blueprint, a contract, and a data type for objects. It defines the properties of objects and provides an ___ for initializing objects and methods for manipulating them.**

**Answer:** `class`; `initializer`

**Key Focus:** Understand that classes serve as blueprints defining both data (instance variables) and behavior (methods), with the initializer being essential for setting up initial object state.

### Question 2: Special Parameters and Naming
**The initializer is always named ___. The first parameter in each instance method including the initializer in the class refers to the object that calls the method. By convention, this parameter is named ___.**

**Answer:** `__init__`; `self`

**Key Focus:** Recognize that `__init__` is always the initializer name and `self` always refers to the current object. This is fundamental to how methods access and modify instance variables.

### Question 3: Creating and Accessing Objects
**An ___ is an instance of a class. You use the ___ to create an object, and the ___ to access that object through the variable that references the object.**

**Answer:** `object`; `constructor`; `dot operator (.)`

**Key Focus:** Understand object creation through constructors and the dot operator for accessing both attributes and methods.

### Question 4: Instance-Level Members
**An ___ or ___ belongs to an instance of a class. Its use is associated with individual instances.**

**Answer:** `instance variable`; `instance method`

**Key Focus:** Grasp the concept that both data (instance variables) and behavior (instance methods) are tied to specific object instances, with each object having its own copy of instance variables.

### Question 5: Data Protection Through Accessors/Mutators
**You can provide a ___ method or a ___ method to enable clients to read or modify the data.**

**Answer:** `accessor (getter)`; `mutator (setter)`

**Key Focus:** Understand that accessors and mutators enable controlled, protected access to private instance variables, allowing validation and maintaining encapsulation.

---

## Further Reading

Sections 9.1 - 9.8 of "Introduction to Python Programming and Data Structures" textbook provide additional depth on these topics.

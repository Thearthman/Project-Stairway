---
{"dg-publish":true,"permalink":"/HKUST/COMP1023/1023 Order of Evaluation/"}
---

## Python Expression Evaluation: Precedence, Associativity, and Evaluation Order

## Three Distinct Concepts

**1. Precedence** determines how operators are **grouped** (parsed) into a hierarchical structure. Higher precedence operators bind more tightly to their operands. This creates the expression's tree-like structure before any computation happens.[geeksforgeeks+4](https://www.geeksforgeeks.org/python/precedence-and-associativity-of-operators-in-python/)​

**2. Associativity** resolves grouping when **multiple operators of the same precedence** appear together. Most Python operators are left-to-right associative, but exponentiation (`**`) and assignment operators are right-to-left.[programiz+2](https://www.programiz.com/python-programming/precedence-associativity)​

**3. Evaluation Order** is the sequence in which operands are **actually computed** within the grouped structure. In Python, operands are always evaluated left-to-right **within each operator's scope**.[python+2](https://docs.python.org/3/reference/expressions.html)​

## How They Work Together

The three concepts operate in sequence:[stackoverflow+2](https://stackoverflow.com/questions/67689209/operator-precedence-versus-order-of-evaluation)​

1. **Precedence** groups the expression into a structure (determines which operations contain which)
    
2. **Associativity** resolves ambiguity for same-precedence operators
    
3. **Evaluation order** determines the computation sequence within that structure
    

## Example: `a() + b() * c()`

**Step 1 - Precedence groups it as:** `a() + (b() * c())` (multiplication has higher precedence than addition)[programiz+1](https://programiz.pro/resources/python-operator-precedence-associativity/)​

**Step 2 - Evaluation proceeds:**

- Evaluate `a()` (left operand of `+`)
    
- Evaluate the grouped expression `(b() * c())`:
    
    - Evaluate `b()` (left operand of `*`)
        
    - Evaluate `c()` (right operand of `*`)
        
    - Apply `*` to the results
        
- Apply `+` to combine `a()`'s result with the multiplication result
    

This shows that left-to-right evaluation applies **within each operator's operands**, not across the entire expression.[codeblog.jonskeet+2](https://codeblog.jonskeet.uk/2015/04/21/precedence-ordering-or-grouping/)​

## Example: `10 / 2 > 1`

**Precedence:** Groups as `(10 / 2) > 1` (division before comparison)[geeksforgeeks+1](https://www.geeksforgeeks.org/python/precedence-and-associativity-of-operators-in-python/)​

**Evaluation:**

1. Compute `10 / 2` → `5` (left operand of `>`)
    
2. Evaluate `1` (right operand of `>`)
    
3. Apply `>` operator: `5 > 1` → `True`
    

## Example: `100 / 10 * 10` (Same Precedence)

**Precedence:** Division and multiplication have equal precedence[programiz+1](https://www.programiz.com/python-programming/precedence-associativity)​

**Associativity:** Both are left-to-right associative, so groups as `(100 / 10) * 10`[programiz+1](https://programiz.pro/resources/python-operator-precedence-associativity/)​

**Evaluation:**

1. Compute `100 / 10` → `10`
    
2. Compute `10 * 10` → `100`
    

## Special Case: Short-Circuit Evaluation

Logical operators `and` and `or` use short-circuit evaluation, which can **skip** evaluating the right operand.[geeksforgeeks+2](https://www.geeksforgeeks.org/python/short-circuiting-techniques-python/)​

**Example: `0 and 10 / 0 > 1`**

**Precedence:** Groups as `0 and ((10 / 0) > 1)` (`and` has lowest precedence)[runestone+1](https://runestone.academy/ns/books/published/fopp/Conditionals/PrecedenceofOperators.html)​

**Evaluation:**

1. Evaluate left operand: `0` (falsy)
    
2. Short-circuit: Since `and` requires both operands to be truthy and the left is falsy, Python immediately returns `0` without evaluating `((10 / 0) > 1)`[realpython+1](https://realpython.com/lessons/short-circuit-evaluation/)​
    

Short-circuiting happens **during evaluation**, not during parsing. Precedence still determines the grouping, but the evaluation logic decides whether the right operand needs computation based on the left operand's value.[jrheard+2](https://blog.jrheard.com/truthiness-and-short-circuit-evaluation-in-python)​

## Precedence Hierarchy (Highest to Lowest)

1. Parentheses `()`[geeksforgeeks+1](https://www.geeksforgeeks.org/python/precedence-and-associativity-of-operators-in-python/)​
    
2. Exponentiation `**` (right-to-left)[programiz+1](https://www.programiz.com/python-programming/precedence-associativity)​
    
3. Multiplication, division `*`, `/`, `//`, `%` (left-to-right)[programiz+1](https://programiz.pro/resources/python-operator-precedence-associativity/)​
    
4. Addition, subtraction `+`, `-` (left-to-right)[geeksforgeeks+1](https://www.geeksforgeeks.org/python/precedence-and-associativity-of-operators-in-python/)​
    
5. Comparisons `<`, `>`, `<=`, `>=`, `==`, `!=` (left-to-right)[programiz+1](https://programiz.pro/resources/python-operator-precedence-associativity/)​
    
6. Boolean `not` (right-to-left)[geeksforgeeks](https://www.geeksforgeeks.org/python/precedence-and-associativity-of-operators-in-python/)​
    
7. Boolean `and` (left-to-right)[programiz+1](https://programiz.pro/resources/python-operator-precedence-associativity/)​
    
8. Boolean `or` (left-to-right, lowest)[geeksforgeeks+1](https://www.geeksforgeeks.org/python/precedence-and-associativity-of-operators-in-python/)​
    

## Key Insight

Precedence and associativity determine **structure** (how the expression is parsed), while evaluation order determines **computation sequence** (how values are calculated within that structure). They complement each other rather than conflict.[stackoverflow+1](https://stackoverflow.com/questions/67689209/operator-precedence-versus-order-of-evaluation)​

1. [https://www.geeksforgeeks.org/python/precedence-and-associativity-of-operators-in-python/](https://www.geeksforgeeks.org/python/precedence-and-associativity-of-operators-in-python/)
2. [https://www.programiz.com/python-programming/precedence-associativity](https://www.programiz.com/python-programming/precedence-associativity)
3. [https://docs.python.org/3/reference/expressions.html](https://docs.python.org/3/reference/expressions.html)
4. [https://programiz.pro/resources/python-operator-precedence-associativity/](https://programiz.pro/resources/python-operator-precedence-associativity/)
5. [https://introcs.cs.princeton.edu/python/appendix_precedence/](https://introcs.cs.princeton.edu/python/appendix_precedence/)
6. [https://stackoverflow.com/questions/67689209/operator-precedence-versus-order-of-evaluation](https://stackoverflow.com/questions/67689209/operator-precedence-versus-order-of-evaluation)
7. [https://www.wscubetech.com/resources/python/precedence-associativity-operators](https://www.wscubetech.com/resources/python/precedence-associativity-operators)
8. [https://www.interserver.net/tips/kb/understanding-operator-precedence-in-python-a-beginners-guide/](https://www.interserver.net/tips/kb/understanding-operator-precedence-in-python-a-beginners-guide/)
9. [https://cloud.sowiso.nl/courses/theory/303/2805/42245/en](https://cloud.sowiso.nl/courses/theory/303/2805/42245/en)
10. [https://codeblog.jonskeet.uk/2015/04/21/precedence-ordering-or-grouping/](https://codeblog.jonskeet.uk/2015/04/21/precedence-ordering-or-grouping/)
11. [https://www.geeksforgeeks.org/python/short-circuiting-techniques-python/](https://www.geeksforgeeks.org/python/short-circuiting-techniques-python/)
12. [https://realpython.com/lessons/short-circuit-evaluation/](https://realpython.com/lessons/short-circuit-evaluation/)
13. [https://blog.jrheard.com/truthiness-and-short-circuit-evaluation-in-python](https://blog.jrheard.com/truthiness-and-short-circuit-evaluation-in-python)
14. [https://runestone.academy/ns/books/published/fopp/Conditionals/PrecedenceofOperators.html](https://runestone.academy/ns/books/published/fopp/Conditionals/PrecedenceofOperators.html)
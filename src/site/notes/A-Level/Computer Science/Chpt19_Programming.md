---
{"dg-publish":true,"permalink":"/A-Level/Computer Science/Chpt19_Programming/"}
---

# Syllabus
```ad-quote
# 1. Algorithm
1. Show understanding of linear and binary searching methods
2. Show understanding of insertion sort and bubble sort methods
3. Show understanding of and use Abstract Data Types (ADT)
4. Show how it is possible for ADTs to be implemented from another ADT
5. Show understanding that different algorithms which perform the same task can be compared by using criteria (e.g. time taken to complete the task and memory used)
---

# 2. Recursion
1. Show understanding of recursion
	1.  Essential features of recursion
	2.  How recursion is expressed in a programming language
2. Write and trace recursive algorithms
3.   When the use of recursion is beneficial
4.  Show awareness of what a compiler has to do to translate recursive programming code
5.   Use of stacks and unwinding
```


# 19.1 Algorithm
## Linear Search


## Binary Search


## Abstrast Data Type
### Stack
```
PROCEDURE Initialise()
	BasePointer <- 1 
	TopPointer <- 0 
ENDPROCEDURE
```
### Queue
```
PROCEDURE Initialise 
	FrontPointer <- -1 
	RearPointer  <- -1 
	Length       <-  0
ENDPROCEDURE
```
### Binary Tree
## ADT implemented from other ADT


## Big O-Notation
>[! def]
>Big O notation is a mathematical notation used to describe the performance or complexity of an algorithm in relation to the time taken or the memory used for the task. It is used to describe the worst-case scenario.
>![Pasted image 20250319210551.png](/img/user/Attachments/Pasted%20image%2020250319210551.png)

### Comparison between Linear and Binary Search
>[! def]
>Linear search O(n) and Binary search O(log 2n) / O(Log n) 
Time to search increases linearly in relation to the number of items in the list for a linear search and logarithmically for a Binary search 
Time to search increases less rapidly for a binary search and time to search increases more rapidly for a linear search




--- 
# 19.2 Recursion
>[! def]
>A function that calls it self in definition. It have two cases; one is base case when it resolves to return a value; another one is recursive case when it calls back to itself. 

## Base case and recursive case
> This is used to help define a recursive function

## Winding and Unwinding
>[! def]
>
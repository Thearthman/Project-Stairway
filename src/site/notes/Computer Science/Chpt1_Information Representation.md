---
{"dg-publish":true,"permalink":"/computer-science/chpt1-information-representation/"}
---


# 1.01 Number System

## Place Value

```
The *value* that a *specific place* in the number system refers to. 
For example, *300* have a place value of *$10^2$*
```

## Digit

``` ad-def
Digit is the *number* that *specific place* is *assigned* with.
For example, *300* have a digit of *3* in *$10^2$ place*
```

## Binary

``` ad-def

A bit is a binary digit in base-2/binary system that's representated using 0 or 1.
```

## Denary

``` ad-def
Denary is written with 10 symbols:0,1,2,3,4,5,6,7,8,9.
```

### **Conversion**

1.  [[Computer Science/Chpt1_Information Representation#Binary\|Binary]] to [[Computer Science/Chpt1_Information Representation#Denary\|Denary]]: *Successive devision*
#### *Successive Devision*

>[!example] Example of Succesive Devision
>$$\begin{align}
>52\div 2&=26\dots 0 \\
>26\div 2&=12\dots 0 \\
>13\div 2&=6\dots 1 \\
>6\div 2&=3\dots 0 \\
>3\div 2&=1\dots 1 \\
>1\div 2&=0\dots 1 \\
>0\div 2&=0\dots 0
>\end{align}$$

2.  Binary to Denary: *Successive Multiplication*
#### *Succesive Multiplication*

>[!example] Example of Succesive Multiplication
>$$
\begin{align} 
& &\to1\times 2=2 \\
\hline
2+1 &=3 &\to
3\times 2=6 \\
\hline
6+0&=6 &\to
6\times 2=12 \\
\hline
12+0&=12 &\to
12\times 2=24 \\
\hline
24+1&=25  &\to
25\times 2 =50
\end{align}
$$


## Hexadecimal

### **Conversion**

Denary to Hexadecimal: [[Computer Science/Chpt1_Information Representation#*Successive Devision*\|Successive devision]] works
Binary to Hexadecimal: too ez
Hexadecimal to Denary: \[\[Chpt1_Information Representation#*Succesive Multiplication*\| Successive multiplication\]\] works, replace
Hexadecimal to Binary: too ez
\## EQ
![[Screenshot 2023-09-04 at 10.22.43.png\|Screenshot 2023-09-04 at 10.22.43.png]]
$$
\begin{align} 
46\div 2&=23\dots_{0} \\
23 \div 2 &= 11\dots_{0} \\
11 \div 2 &= 5\dots_{1} \\
5\div 2 &=2\dots_{1} \\
2\div 2&=1\dots_{0} \\
1\div 2&= 0\dots_{1} \\
&=0101100
\end{align}
$$
![[Screenshot 2023-09-04 at 10.23.40.png\|Screenshot 2023-09-04 at 10.23.40.png]]
i.
$$
\begin{align}
150 \div 2&= 75\dots_{0} \\
75 \div 2&=37\dots_{1} \\
37\div 2&=18\dots_{1} \\
18\div 2&=9\dots_{0} \\
9\div 2&=4\dots_{1} \\
4\div 2&=2\dots_{0} \\
2\div 2&=1\dots_{0} \\
1\div 2&=0\dots_{1} \\
&=10010110
\end{align}
$$
ii.
$$
\begin{align}
1001&\to 9 \\
1100&\to C \\
\end{align}
$$
\## Quiz
[[1.1._Number_Systems_Quiz_.pdf\|1.1._Number_Systems_Quiz_.pdf]]
[[IMG_9986 1.pdf\| Answer]]

# 1.02 Numbers and Quantities

# Kib

Kib = $2^{10}$ bits
Mib = $2^{20}$ bits
Gib = $2^{30}$ bits
Tib = $2^{40}$ bits
\# Kb
Kb = $10^3$ bits
Mb = $10^6$ bits
Gb = $10^9$ bits
Tb = $10^{12}$ bits

# 1.03 Internal Coding of Numbers

## *Two's Complement* for integer numbers

> Way to represent ***negative*** numbers

``` ad-def
*Two's Complement*: The largest value of bit is negative.
    $1000\;0000=-128$
    $1111\;1111=-1$
```

**Method:**
$$
\begin{align}
0001\;1000& \\
\text{Reverse Digits}&\\
1110\;0111& \\ 
+1&\\
\hline
1110\;1000 \\
\end{align}
$$

**Range:**
When using **8** digits, we get $(-2^{8-1} \to2^{8-1}-1)$ range of numbers

``` ad-tk
1. Keep in **mind** the digits, the **total** **digits** u have
2. To get the **negative** of the current binary number, **flip** every digit
```

## Minusing

Do \[\[Chpt1_Information Representation#1.03 Internal Coding of Numbers\|two's compliment\]\] and add.
\## Binary Coded Decimal (BCD)

``` ad-def
Using *4 bits* (because 3 ins't enough for 10 digits) to represent the each of the *10 digits* in *Decimal*.
1 $\to$ 0001
9 $\to$ 1001
```

### Calculation of BCD

``` ad-ep
$$
\begin{align}
7\;8\;6& \\
+\;3\;2\;5& \\
\hline
1\;1\;1\;1
\end{align}
$$
*Equavelent to*
$$
\begin{align}
0111\;1000\;0110& \\
+\;0011\;0010\;0101& \\
\hline 
1010\;1010\;1011 \\
do\; +6 \\

1\;0001 \\
\hline
1011\;0001\\
1\;0001\;0001 \\
\hline
1011\;0001\;0001 \\
1\;0001\;0001\;0001 \\
=1111
\end{align}
$$
```

``` ad-tk
When the calculated value exeed 1001, add a 0110(6) to the value.
```

# 1.04 Internal Coding of Text

### keywords

unicode
ASCII
Code
Scheme
## ASCII Code

``` ad-def
A method to represent *text* using [[Chpt1_Information Representation#1.01 Number System|number systems]]
Full name: **American Standard Code**
#### Fixed bits per character
Total of *$2^7$(128)* numbers avaliable for *7-bit code*
```

``` ad-tk
To convert *capital* letters (cause it comes first in terms of order) to *lower case* letters, *add* **32** to the *denary* value. This is *equivalent* to adding **0010 0000** to the *binary* value.
```

## Unicode

``` ad-def
More versatile than [[Chpt1_Information Representation#|ASCII Code]]
#### **Dynamic bits per character**
```

# 1.05 Images

## Vector

``` ad-def
Created as individual *drawing object*
Vector file contains a *drawing list*. Each from the list contain *property* of the object.
```

## Bitmap

``` ad-def
Created using picture element (pixel)
Pixel is the smallest element of the image.
```

### Color Depth

``` ad-def
Number of bits per pixel.
```

### Image Size Calculation

``` ad-fm
Image Size **(In bytes)** = resolution * Color depth **(in bytes)**
```

``` ad-tk
MB = mega *byte* $\to 1*10^6$ byte
Mb = mega *bit*
Mbps = mega *bits* per second
MiB = **mebi** *bytes*
```

# 1.06 Sound

## Sample Rate

``` ad-def
Similar to Resolution, corresponds to the resolution/quality of the sound wave.
```

## Sound Rate Calculation

``` ad-fm
Sound Size *(in bytes)* = length * *Sample Rate* * *Sample per Second*
```

# 1.07 Compression Techniques

## *Lossy* Compression

### perceptual music shaping \[lossy\]

``` ad-def
Used by MP3
For **Music**: Remove redundent, sounds we can't hear, to save file size
```

## *Lossless* Compression

### RLE \| Run Length Encoding

``` ad-def
For **Anything**: Pattern*Length, 
```

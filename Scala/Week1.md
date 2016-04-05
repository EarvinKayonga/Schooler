
## 1.3 Evaluation Strategies and Termination

**Theoreme:**
```
 If CBV for an expression e terminates, then CBN also.
 The other way doesn't work
```

**In Scala**, CBV is by default but CBN can be specified
```
def constOne(x:Int, y: Int) = 1
def loop = loop

constOne( (1+2), loop) => constOne(3, loop) => 1
```

## 1.4 Boolean Expression, Values Definition

Boolean expressions could be
- true false // constants
- !b		 // Negation
- b && b	 // Conjuction
- b || b	 // Disjunction
- comparisons (e > 1), etc

**Values definitions**

def is CBN operator
val is CBV operator

Example:
```
def and(x:Boolean, y: =>Boolean):Boolean = if (x) y else false

y is CBN because if not,
and(true, loop) => infinite loop
```

## 1.5 Square Roots with Newton's Method

```
 def sqrt(x: Double):Double = ...
```


**Construction**

```
def abs(x:Double) = if (x < 0) -x else x

def mean(x: Double, y: Double): Double = {
  (x+y)/2
}

def improve(guess: Double, x: Double): Double = {
  mean(guess, x/guess);
}

def isGoodEnough(guess: Double, x: Double) = {
  abs(guess * guess - x) < 0.000001
}

def sqrtIter(guess: Double, x: Double): Double = {
  if (isGoodEnough(guess, x)) guess;
  else sqrtIter(improve(guess, x), x)
}

```

**Finally**

```
  def sqrt(x: Double):Double = sqrtIter(1.0,x)
```

**This implementation is too precise for very large number and not enough for very small number**



#### So:

```
def abs(x:Double) = if (x < 0) -x else x

def mean(x: Double, y: Double): Double = {
  (x+y)/2
}

def improve(guess: Double, x: Double): Double = {
  mean(guess, x/guess);
}

def isGoodEnough(guess: Double, x: Double) = {  // NEW implementation
  abs(guess * guess - x) / x < 0.000001
}

def sqrtIter(guess: Double, x: Double): Double = {
  if (isGoodEnough(guess, x)) guess;
  else sqrtIter(improve(guess, x), x)
}

def sqrt(x: Double):Double = sqrtIter(1.0,x)

```

Tests

sqrt(2)
sqrt(1e-60)
sqrt(1e60)

## 1.6 Blocks and Lexical Scope

privatizing the intermediaire functions

```
def sqrt(x: Double):Double = {
def abs(x: Double) = if (x < 0) -x else x

def mean( y: Double, x: Double): Double = {
  (x+y)/2
}

def improve(guess: Double): Double = {
  mean(guess, x/guess);
}

def isGoodEnough(guess: Double) = { 
  abs(guess * guess - x) / x < 0.000001
}

def sqrtIter(guess: Double): Double = {
  if (isGoodEnough(guess)) guess;
  else sqrtIter(improve(guess))
}

sqrtIter(1.0)
}
```

## 1.7 Tail Recursion

sqrtIter is in a tail recursive implementation.
If the last call in a recursive function is a function => tail recursive 

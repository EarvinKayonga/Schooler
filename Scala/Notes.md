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


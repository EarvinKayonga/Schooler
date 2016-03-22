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
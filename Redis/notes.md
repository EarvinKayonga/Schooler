5 data structures:

* String
* List
* Set
* Hash
* Sorted Set

#### Other features:

## Pub, Sub

* publish, subscribe to channels,

## Transactions

**No Rollback**

* multi => sets redis to transaction mode
* queues orders until the user enters ```exec``` or ```discard```

## List

Methods:

* Lpush,Rpush
* Lrem
* Lindex
* Lrange
* Llen
* Lpop, Rpop => Stack, Queue
* Ltrim

## Set

Collection of unique strings. No track in order

Methods:

*	Sadd
* Scard
* Sdiff, Sinter, Sunion => ensemblist operations
* Sismember
* Smembers
* Smove
* Srem

## Sorted Set

Collection of unique strings but with score

*	Zadd
* Zcard
* Zcount
* Zrange
* Zrank
* Zrem
* Zscore


## Hash

Really close to object (Oop like)

* Hset, Hmset
* Hget, Hmget
* HgetAll
* Hdel
* Hexists
* Hincrby
* Hkeys
* Hvals

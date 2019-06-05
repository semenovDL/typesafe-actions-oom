# Typesafe actions out of memory bug

## Problem

With adding of new action creators number of generated types and memory consumption increases exponentially.

## Benchmarks

10 actions

```sh
$>make bench-10
rm -rf dist
node --max-old-space-size=8000 \
		./node_modules/typescript/lib/tsc.js --diagnostics --outDir dist \
		benchmarks/10types.d.ts
Files:            55
Lines:         64903
Nodes:        201990
Identifiers:   65203
Symbols:      104056
Types:         57233
Memory used: 165272K
I/O read:      0.05s
I/O write:     0.00s
Parse time:    0.58s
Bind time:     0.23s
Check time:    2.11s
Emit time:     0.02s
Total time:    2.95s
```

30 actions

```sh
$>make bench-30
rm -rf dist
node --max-old-space-size=8000 \
		./node_modules/typescript/lib/tsc.js --diagnostics --outDir dist \
		benchmarks/30types.d.ts
Files:            56
Lines:         64929
Nodes:        202105
Identifiers:   65245
Symbols:      104255
Types:        225102
Memory used: 229555K
I/O read:      0.03s
I/O write:     0.00s
Parse time:    0.56s
Bind time:     0.23s
Check time:    2.73s
Emit time:     0.03s
Total time:    3.54s
```

60 actions

```sh
$>make bench-60
rm -rf dist
node --max-old-space-size=8000 \
		./node_modules/typescript/lib/tsc.js --diagnostics --outDir dist \
		benchmarks/60types.d.ts
Files:            57
Lines:         64965
Nodes:        202269
Identifiers:   65307
Symbols:      104499
Types:       1760870
Memory used: 990615K
I/O read:      0.03s
I/O write:     0.00s
Parse time:    0.56s
Bind time:     0.22s
Check time:    7.45s
Emit time:     0.03s
Total time:    8.27s
```

100 actions

```sh
$>make bench-100
rm -rf dist
node --max-old-space-size=8000 \
		./node_modules/typescript/lib/tsc.js --diagnostics --outDir dist \
		benchmarks/100types.d.ts
Files:             58
Lines:          65011
Nodes:         202483
Identifiers:    65389
Symbols:       104823
Types:        8725357
Memory used: 4877867K
I/O read:       0.03s
I/O write:      0.00s
Parse time:     0.57s
Bind time:      0.22s
Check time:    35.34s
Emit time:      0.04s
Total time:    36.18s
```

bench-10:
	rm -rf dist
	node --max-old-space-size=8000 \
		./node_modules/typescript/lib/tsc.js --diagnostics --outDir dist \
		benchmarks/10types.d.ts

bench-30:
	rm -rf dist
	node --max-old-space-size=8000 \
		./node_modules/typescript/lib/tsc.js --diagnostics --outDir dist \
		benchmarks/30types.d.ts

bench-60:
	rm -rf dist
	node --max-old-space-size=8000 \
		./node_modules/typescript/lib/tsc.js --diagnostics --outDir dist \
		benchmarks/60types.d.ts

bench-100:
	rm -rf dist
	node --max-old-space-size=8000 \
		./node_modules/typescript/lib/tsc.js --diagnostics --outDir dist \
		benchmarks/100types.d.ts

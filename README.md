<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# gcopy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Copy values from `x` into `y`.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-gcopy
```

</section>

<section class="usage">

## Usage

```javascript
var gcopy = require( '@stdlib/blas-base-gcopy' );
```

#### gcopy( N, x, strideX, y, strideY )

Copies values from `x` into `y`.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

gcopy( x.length, x, 1, y, 1 );
// y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function has the following parameters:

-   **N**: number of values to copy.
-   **x**: input array.
-   **strideX**: index increment for `x`.
-   **y**: destination array.
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine how values from `x` are copied into `y`. For example, to copy in reverse order every other value in `x` into the first `N` elements of `y`,

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];

gcopy( 3, x, -2, y, 1 );
// y => [ 5.0, 3.0, 1.0, 10.0, 11.0, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

// Copy in reverse order every other value from `x1` into `y1`...
gcopy( 3, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ]
```

#### gcopy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Copies values from `x` into `y` using alternative indexing semantics.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

gcopy.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to copy every other value in `x` starting from the second value into the last `N` elements in `y` where `x[i] = y[n]`, `x[i+2] = y[n-1]`,...,

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];

gcopy.ndarray( 3, x, 2, 1, y, -1, y.length-1 );
// y => [ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `y` unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/complex64`][@stdlib/array/complex64]).
-   `gcopy()` corresponds to the [BLAS][blas] level 1 function [`dcopy`][dcopy] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`dcopy`][@stdlib/blas/base/dcopy], [`scopy`][@stdlib/blas/base/scopy], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array-filled-by' );
var gcopy = require( '@stdlib/blas-base-gcopy' );

var x = filledarrayBy( 10, 'float64', discreteUniform( 0, 500 ) );
console.log( x );

var y = filledarrayBy( 10, 'uint8c', discreteUniform( 0, 255 ) );
console.log( y );

// Copy elements from `x` into `y` starting from the end of `y`:
gcopy( x.length, x, 1, y, -1 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/dcopy`][@stdlib/blas/base/dcopy]</span><span class="delimiter">: </span><span class="description">copy values from x into y.</span>
-   <span class="package-name">[`@stdlib/blas/base/scopy`][@stdlib/blas/base/scopy]</span><span class="delimiter">: </span><span class="description">copy values from x into y.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-gcopy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-gcopy

[test-image]: https://github.com/stdlib-js/blas-base-gcopy/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/blas-base-gcopy/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-gcopy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-gcopy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-gcopy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-gcopy/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-gcopy/main/LICENSE

[blas]: http://www.netlib.org/blas

[dcopy]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/blas/base/dcopy]: https://github.com/stdlib-js/blas-base-dcopy

[@stdlib/blas/base/scopy]: https://github.com/stdlib-js/blas-base-scopy

</section>

<!-- /.links -->

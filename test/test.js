'use strict';

// MODULES //

var tape = require( 'tape' );
var ln = require( 'math-ln' );
var abs = require( 'math-abs' );
var E = require( 'const-e' );
var EPS = require( 'const-eps-float64' );
var LOG10E = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof LOG10E, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 0.4342944819032518', function test( t ) {
	t.equal( LOG10E, 0.4342944819032518, 'equals 0.4342944819032518' );
	t.end();
});

tape( 'export equals log10(e)', function test( t ) {
	var delta;
	var tol;
	var v;

	v = ln( E ) / ln( 10 );

	delta = abs( v - LOG10E );
	tol = EPS * LOG10E;

	t.ok( delta <= tol, 'equals log10(e) within tolerance '+tol );

	t.end();
});

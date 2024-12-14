# JavaScript Falsy Value Bug

This repository demonstrates a subtle bug in JavaScript related to how it handles null and other falsy values (0, false, '', etc.) in arithmetic operations. The bug is in the foo function, which intends to return null if either input is null, but it doesn't handle other falsy values correctly. This can lead to unexpected behavior if the function receives such values.

## Bug Description
The `foo` function returns null if either `a` or `b` is null. However, it doesn't check for other falsy values like 0 or false. When such a value is passed, the addition operation will still proceed and may produce unexpected results.

## Solution
The improved `foo` function explicitly checks for falsy values using a strict equality check and returns null in those cases.  The solution ensures the function always behaves as expected, returning null if either argument is falsy.
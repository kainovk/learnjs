alert( null || 2 || undefined ); // true

alert( alert(1) || 2 || alert(3) ); // 1 (alert вернет undefined), затем 2 (выражение равно true, дальше не идем)

alert( 1 && null && 2 ); // null

alert( alert(1) && alert(2) ); // 1, затем undefined

alert( null || 2 && 3 || 4 ); // 2&&3 = 3


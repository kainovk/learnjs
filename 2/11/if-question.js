if (-1 || 0) alert( 'first' ); // результат true -> выполнится
if (-1 && 0) alert( 'second' ); // результат false -> не выполнится
if (null || -1 && 1) alert( 'third' ); // результат true -> выполнится
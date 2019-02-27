/*
 * Filename: c:\Users\mort8k\Documents\Courses\wdi4\ship_of_the_desert\week01\hw_week_01_day_04_arrays_and_loops\hw_week_01_day_04_arrays_and_loops.js
 * Path: c:\Users\mort8k\Documents\Courses\wdi4\ship_of_the_desert\week01\hw_week_01_day_04_arrays_and_loops
 * Created Date: Wednesday, February 27th 2019, 2:11:18 pm
 * Author: Mortaja Alqassab <moqassa@gmail.com>
 * 
 * Copyright (c) 2019 MiSK Academy
 */

 
//*SECTION#1 EASY GOING
//?commit messge : "Easy Going Answered"
for (var i = 1; i < 21; i++)
{
    console.log(i);
}


//*SECTION#2 GET EVEN
//?commit message : "Get Even Answered"
for (var i = 0; i < 201; i++)
{
    if (i % 2 == 0)
    {
        console.log(i);
    }
}


//*SECTION#3 FIZZ BUZZ
//?commit meassage : "Fizz Buzz Answered"
for (var i = 1; i < 101; i++)
{
    var result = '';

    if (i % 3 == 0)
    {
        result += 'Fizz';
    }
    if (i % 5 == 0)
    {
        result += 'Fuzz';
    }
    console.log(i + '   ' + result);
}
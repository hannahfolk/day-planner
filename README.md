Hannah Folk Day Planner
=======

## Description

This is my day planner, created using HTML, CSS, Javascript, jQuery, and Bootstrap.

## Process

I started out by writing the HTML and adding CSS styling to it. I did not realize that there was starter HTML and CSS files already provided.

When writing the time blocks, I first tried a Bootstrap table, but that did not allow me to easily customize widths, so I went with many divs instead.

For the Javascript, I had to learn how to utilize moment.js. Then I did not realize that it is possible to call an id using $("#name" + indexNumber) so I physically wrote out everything for each hour. Then I made it dry when I found out you could concatenate a string inside $(...), and my code became much simpler.

The last thing I did was make the application responsive. Originally just assigning col-1 and col-11 to the respective divs was not enough, so I had to go in and assign the divs different column widths for each breakpoint.

## Credits

Omar for helping make the code much dryer, https://momentjs.com/ for instructions on how to use moment.js.

## License

MIT License

Copyright (c) [2019] [Hannah Folk]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
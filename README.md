🏷️ Program name: Image Slider

🎯 Program purpose: Create a horizontal roll image display (Slider) can be navigated by an arrow button or pulling the roll bar, to display many images in an intuitive, convenient and beautiful way in the web interface.

🧩 The main component of the program:

 1. HTML:
    
    . Image display structure: <divers = "slider-wapper">
    
    . The navigation buttons: chevron_left, chevron_right
    
        . The photo list: <ul class = "image-List">
     
    . Custom roll bar: .slider-scurbar

 2. CSS:
    
    . Slider interface design: layout, color, hover effect, hidden/show
    
    . Responsive for small
    
    . Scrollbar customized equipment (default scrollbar, creating new thumb)

 3. JavaScript:
    
    . Control image scrolling function with button or mouse
    
    . Update corresponding scroll bar position when scrolling image
    
    . Hide/show left/right button according to current image position

⚙️ Principle of operation: When the site is loaded or replaced in size, the Initslider () function will initialize the entire slider:

   1. Identify image elements, navigation buttons, and scroll bars.

   2. Attach click events to arrow buttons to scroll images left/right.

   3. Attach mousedown, mousemove, mouseup events to let users drag the scrollbar to control the image.

   4. Attach scroll events to update the scrollbar position and hide/show arrow buttons as needed.

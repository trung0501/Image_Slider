// Initialize the slider's operation logic
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");   // Danh sách ảnh cần cuộn 
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");   // 2 nút mũi tên 2 chiều để cuộn ảnh   
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");   // Vùng thanh cuộn 
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");   // Nút trên thanh cuộn 
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;   // Khoảng cách các ảnh 
    
    // Handle scrollbar with the mouse (xử lý thanh cuộn bằng chuột)
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;

            // Ensure the scrollbar thumb stays within bounds (đảm bảo thanh cuộn nằm trong giới hạn)
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        // Stop drag when releasing mouse (dừng kéo khi thả chuột)
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Left and right navigation buttons
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Show or hide slide buttons based on scroll position (hiển thị hoặc ẩn các nút trượt dựa trên vị trí cuộn)
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    // Update scrollbar thumb position based on image scroll (cập nhật vị trí scrollbar thumb khi cuộn bằng nút)
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    // Assign event when photo list scrolls (gán sự kiện khi cuộn danh sách ảnh)
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });
}

// Restart when page loads or resizes (khởi động lại khi trang load hoặc resize:)
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
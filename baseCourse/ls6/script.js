var imagesUrls = [
        "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VucmlzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80", 
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80", 
        "https://images.unsplash.com/photo-1517265035603-faefa167335b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzIEpbAlYy5nmzBmnDFK4fj2RWynkUkm25w&usqp=CAU","https://media.istockphoto.com/photos/panoramic-view-of-colorful-sunrise-in-mountains-picture-id620951116?k=6&m=620951116&s=612x612&w=0&h=qLq1A2gv8BmkWslNMw7U_kuMrHSwc0d4ao9vo-D_dzk=",
        ""
    ];

var currentImageIndex = 1;
var hasShownError = false;
    
    
    function handleImageError() {
        if (currentImageIndex > 1 && currentImageIndex < imagesUrls.length) {
            if (!hasShownError) {
                hasShownError = true;
                alert("Error! Wrong image URL in array.");
            }
        } else {
            hasShownError = false;
            console.log("unhandled error!");
        }
    }
    
    function onPageLoad() {
        console.log("onload event");
        setImages();
        
        var nextImage = document.getElementById("nextImage");
        nextImage.src = imagesUrls[currentImageIndex+1];
        
        var previousImage = document.getElementById("previousImage");
        previousImage.src = imagesUrls[currentImageIndex-1];
    }
    
    function setImages() {
        var currentImage = document.getElementById("currentImage");
        currentImage.src = imagesUrls[currentImageIndex];
    }
    
    function handlePrevious() {
        currentImageIndex = currentImageIndex - 1;
        setImages();
        updateButton(currentImageIndex);
    }
    
    function handleNext() {
        currentImageIndex = currentImageIndex + 1;
        setImages();
        updateButton(currentImageIndex);
    }
    
    function updateButton(newIndex) {
        var nextButton = document.getElementById("nextButton");
        var nextImage = document.getElementById("nextImage");
        if (newIndex == imagesUrls.length - 1) {
            nextButton.disabled = true;
            nextImage.style.visibility = "hidden";
        } else {
            nextImage.style.visibility = "visible";
            nextButton.disabled = false;
            nextImage.src = imagesUrls[currentImageIndex+1];
        }
        
        var previousImage = document.getElementById("previousImage");
        var previousButton = document.getElementById("previousButton");
        if (newIndex == 0) {
            previousImage.style.visibility = "hidden";
            previousButton.disabled = true;
            previousImage.src = null;
        } else {
            previousImage.style.visibility = "visible";
            previousButton.disabled = false;
            previousImage.src = imagesUrls[currentImageIndex-1];
        }
    }
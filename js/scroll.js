window.onload = (event) => {
    const leftBox = document.getElementById('left-box'),
        rightBox = document.getElementById('right-box'),
        leftBox2=document.getElementById('left-box-2'),
        rightBox1=document.getElementById('right-box-1'),
        leftBox3=document.getElementById('left-box-3');
    const LeftAnimationClass='leftMove'
    const RightAnimationClass='rightMove'
    const RightAnimationClass1='rightMove1'
    // 创建监听
    const intersectionObserver = new IntersectionObserver((entries) => {
        for (entry of entries) {
            if (entry.intersectionRatio > 0) {
                if(entry.target.id=='left-box' || entry.target.id=='left-box-2'
                ||entry.target.id=='left-box-3' )
                {
                    addAnimationClass(entry.target, LeftAnimationClass);
                }
                if(entry.target.id=='right-box'||entry.target.id=='right-box-1')
                {
                    addAnimationClass(entry.target, RightAnimationClass);
                }
               
                
            } else {
                if(entry.target.id=='left-box'|| entry.target.id=='left-box-2'
                ||entry.target.id=='left-box-3')
                {
                    removeAnimationClass(entry.target, LeftAnimationClass);
                }
                if(entry.target.id=='right-box'||entry.target.id=='right-box-1')
                {
                    removeAnimationClass(entry.target, RightAnimationClass);
                }
              
            }
        }
    });
    // 添加动画class的操作
    function addAnimationClass(elem, animationClass) {
        elem.className.includes(animationClass) ? 1 : elem.className = elem.className + ' ' + animationClass;
    }
    // 移除动画class的操作
    function removeAnimationClass(elem, animationClass) {
        elem.className.includes(animationClass) ? elem.className = elem.className.replace(animationClass, '') : 1;
        console.log(elem.className);
    }
    // 开启监听
    intersectionObserver.observe(leftBox);
    intersectionObserver.observe(rightBox);
    intersectionObserver.observe(leftBox2);
    intersectionObserver.observe(rightBox1);
    intersectionObserver.observe(leftBox3);
}

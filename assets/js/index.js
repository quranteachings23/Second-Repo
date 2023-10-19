const handleDm = event => {
    const dm = document.getElementById('dm')
    const add = document.getElementById('address')
    const time = document.getElementById('time')

    if (dm.value === 'delivery') {
        add.removeAttribute("hidden");
        time.setAttribute("hidden", false);
    }
    else if (dm.value === 'pickup') {
        time.removeAttribute("hidden");
        add.setAttribute("hidden", false);
    }

}
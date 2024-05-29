document.getElementById('wordInput').addEventListener('input', function() {
    const words = this.value.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 10) {
            words[i] = words[i].match(/.{1,10}/g).join('\n');
        }
    }
    this.value = words.join(' ');
});

import './style.scss';

let capsLockFlag = false;
let langRuFlag = false;
if (localStorage.getItem('lang') === 'ru') {
  langRuFlag = true;
}
const arr = ['Backspace', 'Tab', 'Del', 'Caps Lock', 'Enter', 'Shift', 'Control', 'Alt', 'Meta', 'Space', 'Alt2', 'ContextMenu', 'Control2', 'Shift2', '⯅', '⯇', '⯆', '⯈'];
const str = '`1234567890-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm,./';
const str2 = 'ё1234567890-=йцукенгшщзхъфывапролджэ\\ячсмитьбю.';

const row1 = [];
const row2 = [];
const row3 = [];
const row4 = [];
const row5 = [];

function createRows() {
  let row = str.substring(0, 13).split('');
  let rowRu = str2.substring(0, 13).split('');
  for (let i = 0; i < str.substring(0, 13).length; i += 1) {
    row1.push([row[i], rowRu[i]]);
  }
  row1.push([arr[0], arr[0]]);

  row = str.substring(13, 26).split('');
  rowRu = str2.substring(13, 26).split('');
  for (let i = 0; i < str.substring(13, 26).length; i += 1) {
    row2.push([row[i], rowRu[i]]);
  }
  row2.unshift([arr[1], arr[1]]);

  row = str.substring(26, 37).split('');
  rowRu = str2.substring(26, 37).split('');
  for (let i = 0; i < str.substring(26, 37).length; i += 1) {
    row3.push([row[i], rowRu[i]]);
  }
  row3.unshift([arr[3], arr[3]]);
  row3.push([arr[4], arr[4]]);

  row = str.substring(37, str.length).split('');
  rowRu = str2.substring(37, str.length).split('');
  for (let i = 0; i < str.substring(37, str.length).length; i += 1) {
    row4.push([row[i], rowRu[i]]);
  }
  row4.unshift([arr[5], arr[5]]);
  row4.push([arr[13], arr[13]]);
  row4.push([arr[14], arr[14]]);

  row5.push([arr[6], arr[6]], [arr[8], arr[8]], [arr[7], arr[7]], [arr[9], arr[9]]);
  row5.push([arr[10], arr[10]], [arr[11], arr[11]], [arr[12], arr[12]]);
  row5.push([arr[15], arr[15]], [arr[16], arr[16]], [arr[17], arr[17]]);
}

createRows();

const container = document.createElement('div');
container.classList.add('container');
container.innerHTML = '<div>KEYBOARD (Windows, Изменить раскладку - Ctrl + Alt)</div>';
document.body.append(container);

const textarea = document.createElement('textarea');
textarea.rows = '5';
textarea.classList.add('textarea');
container.append(textarea);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.append(keyboard);

function clickKey(key) {
  textarea.focus();
  if (key === 'Caps Lock') {
    capsLockFlag = !capsLockFlag;
  }

  if (capsLockFlag) {
    if (key !== 'Backspace' && key !== 'Enter' && key !== 'Shift' && key !== 'Alt' && key !== 'Caps Lock' && key !== 'Ctrl' && key !== 'Win' && key !== 'Space' && key !== 'Tab' && key !== 'Control' && key !== 'Meta' && key !== 'Alt2' && key !== 'ContextMenu' && key !== 'Control2' && key !== 'Shift2') {
      textarea.value += key.toUpperCase();
    } else { textarea.value += ''; }
  }
  if (capsLockFlag === false) {
    if (key !== 'Backspace' && key !== 'Enter' && key !== 'Shift' && key !== 'Alt' && key !== 'Caps Lock' && key !== 'Ctrl' && key !== 'Win' && key !== 'Space' && key !== 'Tab' && key !== 'Control' && key !== 'Meta' && key !== 'Alt2' && key !== 'ContextMenu' && key !== 'Control2' && key !== 'Shift2') {
      textarea.value += key;
    } else { textarea.value += ''; }
  }
  if (key === 'Space') {
    textarea.value += ' ';
  }
  if (key === 'Backspace') {
    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
  }
  if (key === 'Tab') {
    textarea.value += '  ';
  }
  if (key === 'Enter') {
    textarea.value += '\n';
  }
  textarea.blur();
}

function hideKeys() {
  const keys = document.querySelectorAll('span');
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i].classList.contains('hide')) {
      keys[i].classList.remove('hide');
      keys[i].classList.add('active');
    } else {
      keys[i].classList.remove('active');
      keys[i].classList.add('hide');
    }
  }
}

function addButton(key, rowNum) {
  const btn = document.createElement('button');
  btn.classList.add('btnstl');
  btn.innerHTML = `<span class="en active">${key[0]}</span>`;
  btn.innerHTML += `<span class="ru hide">${key[1]}</span>`;
  if (key[0] === 'Space' || key[1] === 'Space') {
    btn.id = 'space';
    btn.innerHTML = `<span class="en active">${''}</span>`;
    btn.innerHTML += `<span class="ru hide">${''}</span>`;
  }
  if (key[0] === 'Meta' || key[1] === 'Meta') {
    btn.id = 'win';
    btn.innerHTML = `<span class="en active">${'Win'}</span>`;
    btn.innerHTML += `<span class="ru hide">${'Win'}</span>`;
  }
  if (key[0] === 'ContextMenu' || key[1] === 'ContextMenu') {
    btn.id = 'win2';
    btn.innerHTML = `<span class="en active">${'Win'}</span>`;
    btn.innerHTML += `<span class="ru hide">${'Win'}</span>`;
  }
  if (key[0] === 'Control' || key[1] === 'Control') {
    btn.id = 'ctrl';
    btn.innerHTML = `<span class="en active">${'Ctrl'}</span>`;
    btn.innerHTML += `<span class="ru hide">${'Crtl'}</span>`;
  }
  if (key[0] === 'Control2' || key[1] === 'Control2') {
    btn.id = 'ctrl2';
    btn.innerHTML = `<span class="en active">${'Ctrl'}</span>`;
    btn.innerHTML += `<span class="ru hide">${'Crtl'}</span>`;
  }
  if (key[0] === 'Alt' || key[1] === 'Alt') {
    btn.id = 'alt';
    btn.innerHTML = `<span class="en active">${'Alt'}</span>`;
    btn.innerHTML += `<span class="ru hide">${'Alt'}</span>`;
  }
  if (key[0] === 'Alt2' || key[1] === 'Alt2') {
    btn.id = 'alt2';
    btn.innerHTML = `<span class="en active">${'Alt'}</span>`;
    btn.innerHTML += `<span class="ru hide">${'Alt'}</span>`;
  }
  if (key[0] === 'Shift' || key[1] === 'Shift') {
    btn.id = 'shift';
    btn.innerHTML = `<span class="en active">${'Shift'}</span>`;
    btn.innerHTML += `<span class="ru hide">${'Shift'}</span>`;
  }
  if (key[0] === 'Shift2' || key[1] === 'Shift2') {
    btn.id = 'shift2';
    btn.innerHTML = `<span class="en active">${'Shift'}</span>`;
    btn.innerHTML += `<span class="ru hide">${'Shift'}</span>`;
  }
  if (key[0] === 'Caps Lock' || key[1] === 'Caps Lock') {
    btn.id = 'caps';
  }
  if (key[0] === 'Enter' || key[1] === 'Enter') {
    btn.id = 'enter';
  }
  if (key[0] === 'Tab' || key[1] === 'Tab') {
    btn.id = 'tab';
  }
  if (key[0] === 'Backspace' || key[1] === 'Backspace') {
    btn.id = 'back';
  }
  if (key[0] === '⯅' || key[1] === '⯅') {
    btn.id = 'up';
  }
  if (key[0] === '⯇' || key[1] === '⯇') {
    btn.id = 'left';
  }
  if (key[0] === '⯆' || key[1] === '⯆') {
    btn.id = 'down';
  }
  if (key[0] === '⯈' || key[1] === '⯈') {
    btn.id = 'right';
  }

  btn.addEventListener('click', () => { if (!langRuFlag) { clickKey(key[0]); } else { clickKey(key[1]); } });
  btn.addEventListener('mousedown', () => {
    if (key[0] === 'Caps Lock' && capsLockFlag === true) { btn.classList.remove('colored'); }
    if (key[0] === 'Caps Lock' && capsLockFlag === false) { btn.classList.add('colored'); }
    if (key[0] !== 'Caps Lock') { btn.classList.add('colored'); }
  });
  btn.addEventListener('mouseup', () => { if (key[0] !== 'Caps Lock') { btn.classList.remove('colored'); } });
  rowNum.append(btn);
  if (langRuFlag === true) {
    const keys = document.querySelectorAll('span');
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].classList.contains('ru')) {
        keys[i].classList.remove('hide');
        keys[i].classList.add('active');
      }
      if (keys[i].classList.contains('en')) {
        keys[i].classList.remove('active');
        keys[i].classList.add('hide');
      }
    }
  }
}

function appendRows() {
  const r1 = document.createElement('div');
  r1.classList.add('row');
  row1.forEach((element) => addButton(element, r1));
  keyboard.append(r1);

  const r2 = document.createElement('div');
  r2.classList.add('row');
  keyboard.append(r2);
  row2.forEach((element) => addButton(element, r2));

  const r3 = document.createElement('div');
  r3.classList.add('row');
  keyboard.append(r3);
  row3.forEach((element) => addButton(element, r3));

  const r4 = document.createElement('div');
  r4.classList.add('row');
  keyboard.append(r4);
  row4.forEach((element) => addButton(element, r4));

  const r5 = document.createElement('div');
  r5.classList.add('row');
  keyboard.append(r5);
  row5.forEach((element) => addButton(element, r5));
}

appendRows();

function pressKey(event) {
  const spans = document.querySelectorAll('span');
  let cur = '';
  spans.forEach((b) => {
    if (event.key.toLowerCase() === b.innerText) {
      if (langRuFlag) { cur = b.nextSibling; } else { cur = b; }
    }
  });
  if (event.key === 'CapsLock') {
    capsLockFlag = !capsLockFlag;
  }
  if (capsLockFlag) {
    if (event.code !== 'Space' && event.key !== 'Backspace' && event.key !== 'Enter' && event.key !== 'Shift' && event.key !== 'Alt' && event.key !== 'CapsLock' && event.key !== 'Control' && event.key !== 'Tab' && event.key !== 'Delete' && event.key !== 'Meta' && event.key !== 'ContextMenu' && event.key !== 'ArrowUp' && event.key !== 'ArrowLeft' && event.key !== 'ArrowDown' && event.key !== 'ArrowRight') {
      textarea.value += cur.innerText.toUpperCase();
    } else { textarea.value += ''; }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      if (event.key === 'ArrowUp') {
        textarea.value += '⯅';
      }
      if (event.key === 'ArrowLeft') {
        textarea.value += '⯇';
      }
      if (event.key === 'ArrowDown') {
        textarea.value += '⯆';
      }
      if (event.key === 'ArrowRight') {
        textarea.value += '⯈';
      }
    }
    if (event.key === 'Backspace') {
      textarea.value = textarea.value.substring(0, textarea.value.length - 1);
    }
    if (event.key === 'Enter') {
      textarea.value += '\n';
    }
    if (event.key === 'Tab') {
      textarea.value += '  ';
    }
    if (event.code === 'Space') {
      textarea.value += ' ';
    }
  } else {
    if (event.key === 'Backspace') {
      textarea.value = textarea.value.substring(0, textarea.value.length - 1);
    }
    if (event.key === 'Enter') {
      textarea.value += '\n';
    }
    if (event.code !== 'Space' && event.key !== 'Backspace' && event.key !== 'Enter' && event.key !== 'Shift' && event.key !== 'Alt' && event.key !== 'CapsLock' && event.key !== 'Control' && event.key !== 'Tab' && event.key !== 'Delete' && event.key !== 'Meta' && event.key !== 'ContextMenu' && event.key !== 'ArrowUp' && event.key !== 'ArrowLeft' && event.key !== 'ArrowDown' && event.key !== 'ArrowRight') {
      textarea.value += cur.innerText;
    } else { textarea.value += ''; }
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      if (event.key === 'ArrowUp') {
        textarea.value += '⯅';
      }
      if (event.key === 'ArrowLeft') {
        textarea.value += '⯇';
      }
      if (event.key === 'ArrowDown') {
        textarea.value += '⯆';
      }
      if (event.key === 'ArrowRight') {
        textarea.value += '⯈';
      }
    }
    if (event.key === 'Tab') {
      textarea.value += '  ';
    }
    if (event.code === 'Space') {
      textarea.value += ' ';
    }
    if (event.altKey && event.key === 'Control') {
      langRuFlag = !langRuFlag;
      hideKeys();
    }
    if (event.key === 'Alt' && event.ctrlKey) {
      langRuFlag = !langRuFlag;
      hideKeys();
    }
    if (langRuFlag === true) {
      localStorage.setItem('lang', 'ru');
    } else { localStorage.setItem('lang', 'en'); }
  }
  textarea.blur();
}
const buttons = document.querySelectorAll('span');
const caps = document.getElementById('caps');
document.addEventListener('keydown', (event) => {
  buttons.forEach((b) => {
    if (event.key.toLowerCase() === b.innerText) { b.parentElement.classList.add('colored'); }
  });
  if (event.key === 'CapsLock' && capsLockFlag === true) { caps.classList.remove('colored'); }
  if (event.key === 'CapsLock' && capsLockFlag === false) { caps.classList.add('colored'); }
  if (event.key === 'Meta') { document.getElementById('win').classList.add('colored'); }
  if (event.key === 'ContextMenu') { document.getElementById('win2').classList.add('colored'); }
  if (event.code === 'ControlLeft') { document.getElementById('ctrl').classList.add('colored'); }
  if (event.code === 'ControlRight') { document.getElementById('ctrl2').classList.add('colored'); }
  if (event.code === 'AltLeft') { event.preventDefault(); document.getElementById('alt').classList.add('colored'); }
  if (event.code === 'AltRight') { event.preventDefault(); document.getElementById('alt2').classList.add('colored'); }
  if (event.code === 'ShiftLeft') { document.getElementById('shift').classList.add('colored'); }
  if (event.code === 'ShiftRight') { document.getElementById('shift2').classList.add('colored'); }
  if (event.code === 'Tab') { event.preventDefault(); document.getElementById('tab').classList.add('colored'); }
  if (event.code === 'Enter') { document.getElementById('enter').classList.add('colored'); }
  if (event.code === 'Backspace') { document.getElementById('back').classList.add('colored'); }
  if (event.code === 'Space') { document.getElementById('space').classList.add('colored'); }
  if (event.key === 'ArrowUp') { document.getElementById('up').classList.add('colored'); }
  if (event.key === 'ArrowLeft') { document.getElementById('left').classList.add('colored'); }
  if (event.key === 'ArrowDown') { document.getElementById('down').classList.add('colored'); }
  if (event.key === 'ArrowRight') { document.getElementById('right').classList.add('colored'); }
  pressKey(event);
});
document.addEventListener('keyup', (event) => {
  console.log(textarea.value);
  buttons.forEach((b) => { if (event.key.toLowerCase() === b.innerText) { b.parentElement.classList.remove('colored'); } });
  if (event.key === 'Meta') { document.getElementById('win').classList.remove('colored'); }
  if (event.key === 'ContextMenu') { document.getElementById('win2').classList.remove('colored'); }
  if (event.code === 'ControlLeft') { document.getElementById('ctrl').classList.remove('colored'); }
  if (event.code === 'ControlRight') { document.getElementById('ctrl2').classList.remove('colored'); }
  if (event.code === 'AltLeft') { document.getElementById('alt').classList.remove('colored'); }
  if (event.code === 'AltRight') { document.getElementById('alt2').classList.remove('colored'); }
  if (event.code === 'ShiftLeft') { document.getElementById('shift').classList.remove('colored'); }
  if (event.code === 'ShiftRight') { document.getElementById('shift2').classList.remove('colored'); }
  if (event.code === 'Tab') { document.getElementById('tab').classList.remove('colored'); }
  if (event.code === 'Enter') { document.getElementById('enter').classList.remove('colored'); }
  if (event.code === 'Backspace') { document.getElementById('back').classList.remove('colored'); }
  if (event.code === 'Space') { document.getElementById('space').classList.remove('colored'); }
  if (event.key === 'ArrowUp') { document.getElementById('up').classList.remove('colored'); }
  if (event.key === 'ArrowLeft') { document.getElementById('left').classList.remove('colored'); }
  if (event.key === 'ArrowDown') { document.getElementById('down').classList.remove('colored'); }
  if (event.key === 'ArrowRight') { document.getElementById('right').classList.remove('colored'); }
});

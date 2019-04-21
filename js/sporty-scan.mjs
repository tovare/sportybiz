
import { define, html, render } from 'https://unpkg.com/hybrids@2.0.2/src/index.js';
import QrScanner from './qr-scanner.min.js';

QrScanner.WORKER_PATH = './qr-scanner-worker.min.js';

var vid = document.createElement("VIDEO");
vid.setAttribute("autoplay","true")

const SportyScan = {
    render: (host) => {
        return (host, target) => {
            target.appendChild(vid)
        }
    }
}

const qrScanner = new QrScanner(vid, result => console.log('decoded qr code:', result));
qrScanner.start()

define('sporty-scan', SportyScan);
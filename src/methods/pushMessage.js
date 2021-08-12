import emitter from '@/methods/emitter';

function msgToArray (msg) {
  return typeof msg === 'string' ? [msg] : msg;
}

export default function (response, title = '更新') {
  if (response.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功`,
    });
  } else {
    const message = msgToArray(response.data.message);
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join(','),
    });
  }
}

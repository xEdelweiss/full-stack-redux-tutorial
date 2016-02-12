import Server from 'socket.io';

export default function startServer(store) {
    const io = new Server().listen(8090, '0.0.0.0');

    store.subscribe(() => {
        io.emit('state', store.getState().toJS());
    });

    io.on('connection', (socket) => {
        socket.emit('state', store.getState().toJS());
    });
}
Npm.depends({
    'kue': '0.6.2'
});

Package.on_use(function (api) {
    api.add_files('kue.js', 'server'); // Or 'client', or ['server', 'client']
});
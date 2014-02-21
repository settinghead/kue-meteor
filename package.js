Npm.depends({
    'kue': '0.7.4'
});

Package.on_use(function (api) {
    api.export('Kue');
    api.add_files('kue.js', 'server'); // Or 'client', or ['server', 'client']
});

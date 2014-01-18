Npm.depends({
    'kue': '0.6.2' // Where x.x.x is the version, e.g. 0.3.2
});

Package.on_use(function (api) {
    api.add_files('kue.js', 'server'); // Or 'client', or ['server', 'client']
});
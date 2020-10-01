app.use(express.static('./dist/redesign-art-app'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/redesign-art-app/'}
  );
  });

  app.listen(process.env.PORT || 8080);
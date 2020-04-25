<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Itech Lab 02</title>
    <?php require 'getFormsData.php'; ?>
    <script src="./static/loadData.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>
    <h2>Get movies by media</h2>
    <label for="media">Media type: </label>
    <select name="media" id="media">
        <?php foreach(getMedias() as $media): ?>
            <?php if ($media == 'VHS'): ?>
                <option value="<?= $media ?>" selected="selected"><?= $media ?></option>
            <?php else: ?>
                <option value="<?= $media ?>"><?= $media ?></option>
            <?php endif; ?>
        <?php endforeach; ?>
    </select>
    <button onclick="loadByMedia();">Load data</button>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Director</th>
                    <th>Media</th>
                </tr>
            </thead>
            <tbody id="tbody-media"></tbody>
        </table>
    </div>
    <hr>

    <h2>Get movies by actor</h2>
    <label for="actor">Actor: </label>
    <select name="actor" id="actor">
        <?php foreach(getActors() as $actor): ?>
            <option value="<?= $actor ?>"><?= $actor ?></option>
        <?php endforeach; ?>
    </select>
    <button onclick="loadByActor();">Load data</button>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Director</th>
                    <th>Media</th>
                </tr>
            </thead>
            <tbody id="tbody-actor"></tbody>
        </table>
    </div>
    <hr>
    
    <h2>Get movies by year</h2>
    <label for="year">Year: </label>
    <input type="number" name="year" id="year" min="1888" max="<?= date('Y') ?>" value="<?= date('Y') ?>">
    <button onclick="loadByYear();">Load data</button>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Year</th>
                    <th>Director</th>
                    <th>Media</th>
                </tr>
            </thead>
            <tbody id="tbody-year"></tbody>
        </table>
    </div>
    <hr>
</body>
</html>

namespace SpriteKind {
    export const Ghost = SpriteKind.create()
    export const Extra = SpriteKind.create()
    export const Lives = SpriteKind.create()
    export const Berry = SpriteKind.create()
    export const Edible = SpriteKind.create()
}
scene.onPathCompletion(SpriteKind.Enemy, function (sprite, location) {
    scene.followPath(Scary_Figure, scene.aStar(tiles.locationOfSprite(Scary_Figure), tiles.locationOfSprite(Render.getRenderSpriteInstance())), 48)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tiled floor-death`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    info.stopCountdown()
    game.showLongText("You've Found the Main Boss! Fight him and if you win you will able to find your way out!", DialogLayout.Center)
    tiles.setTileAt(tiles.getTileLocation(23, 23), assets.tile`tiled floor`)
    Scary_Figure.setVelocity(80, 30)
    tiles.placeOnTile(Scary_Figure, tiles.getTileLocation(29, 30))
    Scary_Figure.follow(Render.getRenderSpriteInstance())
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.startCountdown(601)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-5)
    Is_Invincible = true
    pause(2000)
    Is_Invincible = false
})
let Is_Invincible = false
let Scary_Figure: Sprite = null
Render.setViewMode(ViewMode.tilemapView)
info.setLife(100)
game.showLongText("Welcome to the spoopy Scary maze! The goal is to try to get to the end with out dying. HAHAHA!:) ", DialogLayout.Bottom)
Scary_Figure = sprites.create(assets.image`Ghost Face`, SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`level0`)
tiles.placeOnTile(Scary_Figure, tiles.getTileLocation(13, 5))
for (let value4 of tiles.getTilesByType(assets.tile`tiled floor`)) {
    scene.followPath(Scary_Figure, scene.aStar(tiles.locationOfSprite(Scary_Figure), tiles.locationOfSprite(Render.getRenderSpriteInstance())), 48)
}
forever(function () {
    music.play(music.stringPlayable(music.convertRTTTLToMelody(" Halloween:o=5,d=8,b=180,b=180:d6,g,g,d6,g,g,d6,g,d#6,g,d6,g,g,d6,g,g,d6,g,d#6,g,c#6,f#,f#,c#6,f#,f#,c#6,f#,d6,f#,c#6,f#,f#,c#6,f#,f#,c#6,f#,d6,f#"), 236), music.PlaybackMode.LoopingInBackground)
})

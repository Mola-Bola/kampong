// Kampong web: open the app with no connection, from the first visit on.
// Installing this worker saves the whole app on the device: the page, the code, fonts and images. The list of files
// is written into the built copy of this file by scripts/web-pwa.mjs (BUILD below), with a version that changes
// whenever any file does, so a new version saves itself fresh and the old one is removed.
// Pages come from the network first, so a new version shows as soon as you're online; the saved copy is used offline.
// Built files never change once published, so they're served from the saved copy.
// Data (Supabase) is not touched: the app keeps its own offline copy of what you've seen.
const BUILD = {"version":"7e7621f1d97a","files":["_expo/static/js/web/entry-a591a7a04e73b2043b201e270b2c7bd3.js","_expo/static/js/web/index-00883aaf1fe31e08106107ca9982e1a4.js","_expo/static/js/web/index-cd470e6a51d19aa8149101929351f4e7.js","assets/assets/ahpan/ahpan.db79e4fe48f6fecd925f98b1a6d7e6fe.webp","assets/assets/ext/hatch.f69091b1ed93fd013d060ffd190a98d1.webp","assets/assets/ext/oleh.640ab4517b2a7566f8b401a4b681b2a1.webp","assets/assets/fonts/Fredoka_600SemiBold.subset.b1560287dcda52b134ed5c32bd701b0b.ttf","assets/assets/fonts/Fredoka_700Bold.subset.5d2c9db4ff09d312ab273f956bf11940.ttf","assets/assets/fonts/KampongIcons.57e382e06dcd92c40dfc5be27f1d705c.ttf","assets/assets/fonts/MaterialCommunityIcons.subset.7cac0e695784e7600bcf266831d935b2.ttf","assets/assets/fonts/Nunito_600SemiBold.subset.a5e601fe5ca25db5cf283cada5b37ae6.ttf","assets/assets/fonts/Nunito_700Bold.subset.80c63a645d55bf692666ca54917adb29.ttf","assets/assets/fonts/Nunito_800ExtraBold.subset.00073595c77809a72369a97467a690c6.ttf","assets/assets/fonts/Nunito_900Black.subset.0c36a6eaad24b48a3afc77167ac9d75e.ttf","assets/assets/garden/banana.19bb889ba77028bd2f5e0e1e817f1d72.webp","assets/assets/garden/bench.7d247893fd884a57d63ea2f33f69af91.webp","assets/assets/garden/birdhouse.d542ff4acdafd16df2a3c4030c68fdf2.webp","assets/assets/garden/cat.cdaf5d703242d8dc944bfc801313f4ea.webp","assets/assets/garden/chilli-1.3018caa1e82f43c4353cf763a66ba47e.webp","assets/assets/garden/chilli-2.17d5f43c7b2f0ecbf591b4d35998c445.webp","assets/assets/garden/chilli-3.82e14550a2bb43f7163ceac615f0bb75.webp","assets/assets/garden/durian.78ab7f8a37e45394288ccb7451b18098.webp","assets/assets/garden/fish-pond.00ef5cfb9c310642f0ad83722086be9c.webp","assets/assets/garden/flower-arch.b727c0a39113a18aab9450fdd0c7ab40.webp","assets/assets/garden/frame.030ca226c83d4a428e1387276e48d2aa.webp","assets/assets/garden/hen.24301fced878543fc203c17c6d9e87ee.webp","assets/assets/garden/hibiscus.e09173a9180cc8cce703809e58c64442.webp","assets/assets/garden/hut.c9cf68b9c32ab704ae36571f2b3cb4b9.webp","assets/assets/garden/kopi-table.ed9f39c2921a9898fd180e0e9b5ea19a.webp","assets/assets/garden/lantern-post.a0d61e67d7cd94e495c4ac2db053809e.webp","assets/assets/garden/longhouse.f26f70ddfffd1f65f055a34b2b520d40.webp","assets/assets/garden/orchid.f9495726570c2d4e31501fb1a66af12b.webp","assets/assets/garden/palm.1c9b1202ef4a91c88fba3e33f99d4014.webp","assets/assets/garden/plank-bridge.3a5a7142c07632ac3577bfe2c2acb1d5.webp","assets/assets/garden/puppy.7a31c5e4277d6b29d542cc3d71635ee7.webp","assets/assets/garden/rabbit.5f8c5f40a1a781defe856629cb7c9fdc.webp","assets/assets/garden/rambutan.8fdd34c6525a7a7562d1d0a373c93cf7.webp","assets/assets/garden/scarecrow.81ffb6a83f99e0c66720404bdff4ee98.webp","assets/assets/garden/signpost.1bf454b352925f28c6bad7f82a22beac.webp","assets/assets/garden/stall-cart.846e6185deaf3f5ab44bf9ef45c93da8.webp","assets/assets/garden/sunflower-1.a39976bf2b2420fd2c884ffc70fd5c63.webp","assets/assets/garden/sunflower-2.901a15a7c55360285cb63b45580c6971.webp","assets/assets/garden/sunflower-3.aa81064faf5769260edd5a063b5f8de5.webp","assets/assets/garden/tile-flowers.a48e943b751add3f57b842cd183c8fca.webp","assets/assets/garden/tile-grass.d8a3a450a997fac96f8700b77cdfd182.webp","assets/assets/garden/tile-path.0cc7f9c91a3ac22cd94eb914f190c82f.webp","assets/assets/garden/tile-soil.a4eeaf7adf006d0486bac5819234c1bc.webp","assets/assets/garden/tile-water.300794b4721bcdff866ecf8c62d3cd80.webp","assets/assets/garden/turtle.04e40d6738974e025d1c09cdfeebc335.webp","assets/assets/garden/veg-basket.207b06acbe061f0a67ea9b89c0ccee8c.webp","assets/assets/garden/water-can.c5c36546f6909479c26603cbeb1ab80b.webp","assets/assets/garden/wau-stand.197901764d0046f6226a846fc15232d1.webp","assets/assets/garden/well.b5b79421d3b7e9db215b44d10a80704f.webp","assets/assets/garden/wheelbarrow.7376d4f1b517ac354e01ebaba2d27acd.webp","assets/assets/garden/wind-chime.b88a61874257f879eaecb70a4b2d5cec.webp","assets/assets/garden/wood-fence.81d9bc7e8bcfc77a0138457b0be571e5.webp","assets/assets/icons/add-plus.b08abdd04d7d11e19aefeebf3c4d37bc.webp","assets/assets/icons/app-chores.16d67e85fc5bcbd8d7d69c0b0e28be20.webp","assets/assets/icons/app-fish.4740c8e45db93a82253dad16c6523f57.webp","assets/assets/icons/app-fishing.0f7c89552d2c7f887ecdec68ad6b51ba.webp","assets/assets/icons/app-hatch.87ce2ad9ab23d70c691596d66d591d96.webp","assets/assets/icons/app-make.c895c1c491fc6fb5cd8ba9bb25e65511.webp","assets/assets/icons/app-moments.7ac50e2f8e03900d60f3965c18abffe4.webp","assets/assets/icons/app-oleh.5ff9e5c6dc626d7d21826aacb962afd4.webp","assets/assets/icons/app-prayer.4a24ace2430741e9e05169ca48764f0b.webp","assets/assets/icons/app-spend.1002b937cb8c4b55fa5f5d5c8ffca0f1.webp","assets/assets/icons/app-wishes.4ab32f760a360c446d52c0e9afb4d75f.webp","assets/assets/icons/app-workshop.5bd64036c465f4b07e13533e222d6ccc.webp","assets/assets/icons/attach.fe969b9e27ad03de575418b22ecdcfe7.webp","assets/assets/icons/bell.e228d07830592f330949267b8c8cbd60.webp","assets/assets/icons/bills-receipt.c0e3bbba366330a2f40bd7f03012f943.webp","assets/assets/icons/birthday.32bada2e4bf0bc8c1d65e15ee6d77ccd.webp","assets/assets/icons/blank-badge.b63b5a471a66f09844deb973657f0806.webp","assets/assets/icons/budget.bffc012af90f5d2926ad90e1de756059.webp","assets/assets/icons/bug.a2577f4a21c27d1cf0246955fca32e5d.webp","assets/assets/icons/celebrate.88d21a56d3774e635308e0022d70069d.webp","assets/assets/icons/child.ccb3a55f3b501af173eb9eae9be8b31c.webp","assets/assets/icons/compass.15a57a916199f96ba0de0982229a3171.webp","assets/assets/icons/copy.0671933a151ee6bc31eef6afcfd8409b.webp","assets/assets/icons/crown.43a9d6d21fc3dd8a712fbc09f750eab2.webp","assets/assets/icons/day.b06a7dcbfe0758cc47ff561a1ef4459f.webp","assets/assets/icons/delete.126eafa452e78d3ab3d53f32870f40b2.webp","assets/assets/icons/done.6148ce606510c3ae0486d79697c3ceee.webp","assets/assets/icons/download.536cceb6da73d85c67e780d71bc5fb63.webp","assets/assets/icons/edit.d0faf67c36e17e3dc71989857947a99f.webp","assets/assets/icons/empty-suitcase.951a6163856ef5ef9ad99e388aa88ca8.webp","assets/assets/icons/eraser.e713276a9811f2ef77df496bbe15fe4b.webp","assets/assets/icons/event-day.c0fa63f9232eb5f9fceb0ec26b755029.webp","assets/assets/icons/flow-log.4c703014415d5386461b11f08d0d505c.webp","assets/assets/icons/gallery.a8167ab0c2dcb9aa1751d8b944af8197.webp","assets/assets/icons/game-dice.49c6c89ee5d0f993da6d74e2350cace7.webp","assets/assets/icons/game-family-word.88a2945f6b760afaf131084f34a3a21f.webp","assets/assets/icons/game-trivia.b0cda06bbafb8d7326a5d3c25614de22.webp","assets/assets/icons/game-word.3aae72d6b192c04df2dc2442fde4c6e2.webp","assets/assets/icons/games.9b77572f0f211faa6660911030059189.webp","assets/assets/icons/gathering.0f8bec24ad6ced8ce161f7ce16f144fb.webp","assets/assets/icons/generic-heart.732c43f3d5d42130f21e66667609564e.webp","assets/assets/icons/generic-star.3e78024ed21f26eb8b0a0452f2dde8ec.webp","assets/assets/icons/house-add.6651fbcdae1b299665b1bcd4fb8e2b0d.webp","assets/assets/icons/house-remove.91b1e25c563b01056bf60395dac552ce.webp","assets/assets/icons/hush-lantern.54714a5e8ce02bb4b3d9d5a3b5eeb586.webp","assets/assets/icons/idea.5f13f6b163af344177da91a8b340241f.webp","assets/assets/icons/inbox.500720a56ecdb3acab3b82cfb35fc300.webp","assets/assets/icons/invite-lantern.cd6db786fa5cd66d10dd09201ae46801.webp","assets/assets/icons/invite-people.8b0cfb197ed888c124b640be37d76491.webp","assets/assets/icons/invite-person.a1cf26ae4d2841850e4d8605e10e6285.webp","assets/assets/icons/kid-corner.d586140fb518b72b8de74e67dfe3c920.webp","assets/assets/icons/kind-ask.427fdddfa48fc58ec539d014ec7658b0.webp","assets/assets/icons/kind-buy.09cfa6e836544d2e87d42eaf35e02bd6.webp","assets/assets/icons/kind-countdown.d6b96f971cd5ce150631771be14df08f.webp","assets/assets/icons/kind-journal.0888986737ce898830c0b9ea8c6c5e80.webp","assets/assets/icons/kind-kid-task.55d9007549a767c2fbf3b0c8361ff5c6.webp","assets/assets/icons/kind-links.bae1aa3fdbb8b8c663594c20010442c4.webp","assets/assets/icons/kind-list.b583a7d54818a764c6a05f62581e7fcc.webp","assets/assets/icons/kind-places.17149b9c78ed95c17ca3fc973d451488.webp","assets/assets/icons/kind-plan.fbf34ff4f4add80ee8da5890f18849eb.webp","assets/assets/icons/kind-poll.3c2f5c8fdecf97ab7f90b52bf1db8bb8.webp","assets/assets/icons/kind-reminder.9956dc48017b8daceffbde7d0d57841e.webp","assets/assets/icons/kind-schedule.b32b4ce19c278767ac4384a637ca0887.webp","assets/assets/icons/kind-screenshot.c4fe008b9b08ba26c406d7e70f609da8.webp","assets/assets/icons/kind-signup.5038198f0c4d365b424ac500e5819cfc.webp","assets/assets/icons/kind-tracker.f1da5c24cd1398a222233d687db8197f.webp","assets/assets/icons/knock.cd1ddfe42e20cecae86bca4a38bab87e.webp","assets/assets/icons/leaf.1539dda1ec753a2c8dc70c869bba8a63.webp","assets/assets/icons/link.264d580cfbe30ddf5b5aef5ec96614c0.webp","assets/assets/icons/loading-butterfly.6d5d1e3cae88e4cc5179040697c9a489.webp","assets/assets/icons/lock.61f2627cd357ed3253163bd1b38cee7d.webp","assets/assets/icons/magic.77dea0f9e06fa0dea40924aca3a63707.webp","assets/assets/icons/meet-stamp.e33baf0e0b35f9c970067345a182e2cd.webp","assets/assets/icons/mic.d6237fc44b0066f1f3f4f8d878f9816f.webp","assets/assets/icons/mini-plane.e610d08de064409e59b00e0e8cf78de6.webp","assets/assets/icons/mini-tent.cad50d0a0437b433bd9489ff30927aba.webp","assets/assets/icons/move-person.677db74c59d4d5247d3de1e27eece50b.webp","assets/assets/icons/music-note.be6cb5cd06b66354aedba6647d325366.webp","assets/assets/icons/offline.00734eada1629afbd87f26107117c575.webp","assets/assets/icons/owner-tools.b20e228e81732ce8858ec0b0d878b53e.webp","assets/assets/icons/partner-love.f34c868baaae794867ac6b99fdd1b095.webp","assets/assets/icons/paste.3543a66f06754f45909427b6c0f70f87.webp","assets/assets/icons/pending-person.a5406d5ada84190fa7d29c7316529db6.webp","assets/assets/icons/people-group.d54f3738e44e1960b5d51cb0eea249b6.webp","assets/assets/icons/remind-me.2cdf888ef1ac39786ea508b9f86ceca1.webp","assets/assets/icons/remove-person.a0453ba29da0cf1b682e9854f1e96f17.webp","assets/assets/icons/repeat.b27b24ce4ea7510e14e89900e30f15a2.webp","assets/assets/icons/retry.25300e7b1e4f8c75cf3572c194d32fa9.webp","assets/assets/icons/rewards.ee5d820a67d6f96850ab3d1c46bb23a2.webp","assets/assets/icons/route.82f814d95479940b0f2db18f232a08b4.webp","assets/assets/icons/routine-makan.f43bda9b9ee34b6cf9a6df610a5da70a.webp","assets/assets/icons/scan.5ab83827ffacb5eb8714190d0ca6325f.webp","assets/assets/icons/seal.cf6b01d650b4063da775801135cada5b.webp","assets/assets/icons/search.8aa9110de3c989a0aa409330c525d26a.webp","assets/assets/icons/seed-token.3d77692808eb03f54ef253840558d157.webp","assets/assets/icons/send.a5d1040b894078c87dd72fb5bf3da601.webp","assets/assets/icons/settings.722fe0645d57554f09268cbe9b23317f.webp","assets/assets/icons/share.6a306ab7d281c990021a8666086137af.webp","assets/assets/icons/shopping-bag.e949a6c0401cde590789949cab341509.webp","assets/assets/icons/sign-out.4447f99f899332ff85f41a8e896ee26c.webp","assets/assets/icons/snap.10ae0bfbcd3abd90087dde03e7a19020.webp","assets/assets/icons/stall-balai.4b09a85170160b946333f7cf4566c337.webp","assets/assets/icons/stall-campfire.0fb5074667fc0e492c8f17547b4c32c2.webp","assets/assets/icons/stall-garden.028d8572ee3d95c60cae299a5b379c79.webp","assets/assets/icons/stall-noticeboard.386816a4f0ecd7d79a123a751d3b5646.webp","assets/assets/icons/stall-nursery.a877c61ba50bd284dd2b5831bb7cf11a.webp","assets/assets/icons/stall-well.d328a75355d15ef977ad71da3e892232.webp","assets/assets/icons/stall-wharf.ef5ecd2b95741619dfbaf1652a766ff8.webp","assets/assets/icons/steps.5d632ae787c170a8fbe3af8cd36ae0de.webp","assets/assets/icons/streak.c4c53c4f31b39da304f96f98c8b26c61.webp","assets/assets/icons/sunset.06956334d34dd58c003ce37985e8a1cd.webp","assets/assets/icons/switch-account.abc11bdc44eda00653830df8842dabfc.webp","assets/assets/icons/tab-family.db7044d46bf318ea23669ee50964e59a.webp","assets/assets/icons/tab-home.f37393028880ba5d21454af1da93b550.webp","assets/assets/icons/tab-me.d5d3ba0690fc05e5b77130a5a7c6edeb.webp","assets/assets/icons/tab-pasar.f3e2de471564b42d7350b11bcb45e3ed.webp","assets/assets/icons/tab-planner.5156622e0243d74858df03c45e9f2389.webp","assets/assets/icons/tell-us.927fb548aa918069b9e3820aa8287b12.webp","assets/assets/icons/thanks-heart.7f21a138db9df2bd54ae9868b811b192.webp","assets/assets/icons/this-week.05d575962440e5d39fa90bae649dea5e.webp","assets/assets/icons/thoughts.43432e36f731ab4bbbe5bf31378de089.webp","assets/assets/icons/thumbs-down.ee7a9fa9380428619090952bc34ce41f.webp","assets/assets/icons/thumbs-up.5db73fe4c20bdd6ae4a5e2df807ce5bb.webp","assets/assets/icons/time.14920f0d45e533ee9634c4aa78c64a87.webp","assets/assets/icons/transport-bus.994c37038cbe5bc7d2ee16328a1043c4.webp","assets/assets/icons/trophy.600e60db344c36d7c35ee2c1fb530f62.webp","assets/assets/icons/umbrella.c7d6b0b175484413856bd7b58f0ef3b2.webp","assets/assets/icons/undo.84de9f88db454ff45d0c9e9f13896b5c.webp","assets/assets/icons/unlock.0c4be3653eeeb5dc2b121e8dc968e398.webp","assets/assets/icons/update-rocket.4e5972d6bbf6ee9ceb6365479e86ee7b.webp","assets/assets/icons/visit-lantern.cc2e8d048032ec625d523d5887b1e693.webp","assets/assets/icons/vitals.d6633d4f35e209d0a972f97f1dca83ff.webp","assets/assets/icons/warning.ad5e8c51d2d2c66e68b5a97eec65c8b2.webp","assets/assets/icons/wau-kite.1a4a21ab66d83e39c10754eb27a1c4f5.webp","assets/assets/icons/wave.da7e725bde049c78ed5ded1b31e995ed.webp","assets/assets/icons/weather-cloud.0cecc42f7dae03b36dbef1a896523ac7.webp","assets/assets/icons/weather-drizzle.5f4a60e86a6991b7a0ae1307ba543a2a.webp","assets/assets/icons/weather-fog.4712dcb04f23c5e63592fe27f3f73bf8.webp","assets/assets/icons/weather-moon.7d6fed60738fea6dfad4266d2a7f44dc.webp","assets/assets/icons/weather-partly.f44d404ef08db96e69139051fd78020c.webp","assets/assets/icons/weather-rain.81677895becc4aedfd99a655e553de37.webp","assets/assets/icons/weather-snow.9c30cd8a5e189f50c27a10949c4ca718.webp","assets/assets/icons/weather-storm.cba8335d2e7831a15e8372a61469ed75.webp","assets/assets/icons/weather-sun.a4fc0aa4fb685b3047150eb08a768b8c.webp","assets/assets/illustrations/circle-quiet.546013375da77f8c5287793646f1ec42.webp","assets/assets/illustrations/seeds-empty.b24e708cbcff88bb40f8321ebb868921.webp","assets/assets/illustrations/waiting-invite.3f215aa82bd431e84481237bd0a5d58e.webp","assets/assets/loader/butterfly-closed.9376999f2637ea15c07a9e2c52d5689b.webp","assets/assets/loader/butterfly-open.088d0e50c87af44b38cb83f586cbfccd.webp","assets/assets/paper/bunting.56ad76a124940581f7f68008b7429cf6.webp","assets/assets/paper/footer-scene.fb5eb7e00b22681a7b5ecbc2bfc3f112.webp","assets/assets/paper/header-scene.822d554da523fdd58b337af8a6d53d56.webp","assets/assets/paper/knob.02bb7c09ab31bbe5c51e964f2decfda7.webp","assets/assets/paper/paper-tile.e6b4f8a0b137dcf4a6dda6aa9763208d.webp","assets/assets/paper/scene-family.1ed1ce8b69c3ea8ce60eba1a1697a5c5.webp","assets/assets/paper/scene-games.3346cd41282e755c532de09635c2d644.webp","assets/assets/paper/scene-me.17463d11cb756187f8a269b4bf665415.webp","assets/assets/paper/scene-pasar.a5be6a539252dc3d662265c080955c1f.webp","assets/assets/paper/scene-pondok.84943d65f0202a0d4093ea9dd1cbd078.webp","assets/assets/paper/scene-steps.d111ec182c24e04183ad7b014c913f6d.webp","assets/assets/paper/torn-bottom.518395986113e2f21a69fb3aec85bcee.webp","assets/assets/paper/torn-top.d59fc089312feee4d07661f74e52562e.webp","assets/assets/village/fade.b5ffaf8155b84981600dddc4e34a6d3c.png","assets/assets/village/hatch-house.257814b8d6d0ded8de9b425141bd3e9e.webp","assets/assets/village/hill-placeholder.1b51729623fe26f233398ef3a6e903cd.webp","assets/assets/village/hut-sky.87970f5875f85795058721fe6a9d23de.webp","assets/assets/village/oleh-house.7e6ec401d954972ad850160adf9b11e0.webp","assets/assets/welcome/kampong-golden.45444323bce71404ea1e06e8be74c670.webp","assets/node_modules/expo-router/assets/arrow_down.017bc6ba3fc25503e5eb5e53826d48a8.png","assets/node_modules/expo-router/assets/error.d1ea1496f9057eb392d5bbf3732a61b7.png","assets/node_modules/expo-router/assets/file.19eeb73b9593a38f8e9f418337fc7d10.png","assets/node_modules/expo-router/assets/forward.d8b800c443b8972542883e0b9de2bdc6.png","assets/node_modules/expo-router/assets/pkg.ab19f4cbc543357183a20571f68380a3.png","assets/node_modules/expo-router/assets/react-navigation/elements/back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png","assets/node_modules/expo-router/assets/react-navigation/elements/back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png","assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png","assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@2x.png","assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@3x.png","assets/node_modules/expo-router/assets/react-navigation/elements/clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55@4x.png","assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7.png","assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@2x.png","assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@3x.png","assets/node_modules/expo-router/assets/react-navigation/elements/close-icon.808e1b1b9b53114ec2838071a7e6daa7@4x.png","assets/node_modules/expo-router/assets/react-navigation/elements/search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png","assets/node_modules/expo-router/assets/sitemap.412dd9275b6b48ad28f5e3d81bb1f626.png","assets/node_modules/expo-router/assets/unmatched.20e71bdf79e3a97bf55fd9e164041578.png","favicon.ico","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png","index.html","manifest.webmanifest","share/card-plan.jpg"]}; // filled in by scripts/web-pwa.mjs
const SAVED = `kampong-app-${BUILD.version}`;
// Anything asked for that isn't in the list (a build that skipped web-pwa.mjs): saved as it's first fetched.
const EXTRA = 'kampong-extra-v1';
const scope = new URL(self.registration.scope);
const PAGE = new URL('index.html', scope).href;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SAVED)
      .then((cache) =>
        // The page is checked with the server (it names the current code files); the rest can come from the browser's
        // own cache, as the first visit has just downloaded them.
        cache.addAll(BUILD.files.map((f) => new Request(new URL(f, scope).href, f === 'index.html' ? { cache: 'no-cache' } : {}))),
      )
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      // Earlier versions' saved copies go. So do extra files, unless they're all this build has (no list).
      // Only this app's own copies (another app on the same origin keeps its caches).
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('kampong-') && ![SAVED, ...(BUILD.files.length ? [] : [EXTRA])].includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const isStatic = (url) =>
  url.origin === scope.origin && /\/(_expo\/static|assets|icons)\/|\.(ttf|otf|woff2?|png|jpe?g|gif|svg|webp|ico|css|js|webmanifest)$/.test(url.pathname);

/** The saved app page (for any address in the app: they're all the same page). */
async function savedPage() {
  return (await caches.match(PAGE, { cacheName: SAVED })) ?? (await caches.match('shell', { cacheName: EXTRA })) ?? Response.error();
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate' && url.origin === scope.origin) {
    event.respondWith(
      fetch(req)
        .then(async (res) => {
          // No list (a build that skipped web-pwa.mjs): keep the last page seen instead. GitHub Pages answers deep links
          // with its 404 page, which is the app too.
          if (!BUILD.files.length) {
            const html = await res.clone().text();
            if (html.includes('id="root"')) {
              const cache = await caches.open(EXTRA);
              await cache.put('shell', new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } }));
            }
          }
          return res;
        })
        .catch(savedPage),
    );
    return;
  }

  if (isStatic(url)) {
    event.respondWith(
      caches.match(req, { ignoreSearch: true }).then(async (hit) => {
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) (await caches.open(EXTRA)).put(req, res.clone());
        return res;
      }),
    );
  }
});

// Web Push (iPhone Home Screen app, desktop browsers; sent by supabase/functions/push-notify). The payload is generic
// words and ids only: { title, body, data: { n, route?, item? } }.
self.addEventListener('push', (event) => {
  let p = {};
  try {
    p = event.data ? event.data.json() : {};
  } catch {
    /* not JSON: show the plain fallback */
  }
  const data = p && typeof p.data === 'object' && p.data ? p.data : {};
  event.waitUntil(
    self.registration.showNotification(typeof p.title === 'string' ? p.title : 'Good news', {
      body: typeof p.body === 'string' ? p.body : '',
      icon: new URL('icons/icon-192.png', scope).href,
      tag: typeof data.n === 'string' ? data.n : undefined,
      data,
    }),
  );
});

const ID = /^[0-9a-f-]{36}$/i;
/** Where a tapped alert opens: its in-app route (an app path only), with the note id and plan id for the app to act on. */
function pushTarget(data) {
  const route = typeof data?.route === 'string' && /^\/[A-Za-z0-9/_-]*$/.test(data.route) && !data.route.startsWith('//') ? data.route : '/';
  const url = new URL(route.slice(1), scope);
  if (typeof data?.n === 'string' && ID.test(data.n)) url.searchParams.set('push_n', data.n);
  if (typeof data?.item === 'string' && ID.test(data.item)) url.searchParams.set('push_item', data.item);
  return url.href;
}

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = pushTarget(event.notification.data);
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(async (wins) => {
      const win = wins.find((w) => w.url.startsWith(scope.href));
      if (win) {
        await win.focus();
        return win.navigate(url).catch(() => self.clients.openWindow(url));
      }
      return self.clients.openWindow(url);
    }),
  );
});

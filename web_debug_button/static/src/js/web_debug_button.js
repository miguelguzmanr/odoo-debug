odoo.define('web_debug_button.web_debug_button_widget', function(require) {
    "use strict";

    var rpc = require('web.rpc');
    var config = require('web.config');
    var SystrayMenu = require('web.SystrayMenu');
    var Widget = require('web.Widget');

    var WebDebugButton = Widget.extend({
        template: 'web_debug_button',
        init: function () {
            this._super.apply(this, arguments);
            this.isDebug = config.isDebug();
        },
    });

    rpc.query({
        model: 'res.users',
        method: 'has_group',
        args: ['base.group_system']
    })
    .then((has_group_system) => {
        if (has_group_system) {
            SystrayMenu.Items.push(WebDebugButton);
        }
    });
});

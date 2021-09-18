{
    "name": "Developer Button",
    "summary": "Activate the developer mode from anywhere",
    "version": "14.0.1.0",
    "category": "Tools",
    "author": "Miguel A. Guzmán Rodríguez",
    "website": "https://github.com/miguelguzmanr/odoo-debug",
    "license": "LGPL-3",
    "depends": [
        "web",
    ],
    "data": [
        "views/web_views.xml",
    ],
    "qweb": [
        "static/src/xml/web_debug_button.xml",
    ],
    "installable": True,
    "autoinstall": False,
    "application": False,
}

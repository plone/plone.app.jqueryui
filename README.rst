This repository is archived and read only.

If you want to unarchive it, then post to the [Admin & Infrastructure (AI) Team category on the Plone Community Forum](https://community.plone.org/c/aiteam/55).

Introduction
============

Integration of jQueryUI in Plone 4.

This version includes jQueryUI 1.8.16 and let you configure which plugins
you want to activate.

This addon make collective.js.jqueryui a deprecated package.


Include plugins and optimizations
=================================

By default this addon do not activate jQueryUI plugins. So you have to declare
in your own packages which jqueryui you need.

Because jQueryUI is big on both javascripts and css you may want to optimize
the configuration of your site or your addon which depends on this one.

So you can activate/unactivate plugins using registry profile or the jQueryUI
controlpanel.

Using registry.xml, you can activate only what you want:

::

    <registry>
        <records interface="collective.js.jqueryui.controlpanel.IJQueryUIPlugins">
          <value key="ui_draggable">True</value>
          <value key="ui_droppable">True</value>
        </records>
    </registry>

In the case of a policy you can do a full configuration:

::

    <registry>
        <records interface="collective.js.jqueryui.controlpanel.IJQueryUIPlugins">
          <value key="ui_core">True</value>
          <value key="ui_widget">True</value>
          <value key="ui_mouse">True</value>
          <value key="ui_position">True</value>
          <value key="ui_draggable">True</value>
          <value key="ui_droppable">True</value>
          <value key="ui_resizable">True</value>
          <value key="ui_selectable">True</value>
          <value key="ui_sortable">True</value>
          <value key="ui_accordion">False</value>
          <value key="ui_autocomplete">False</value>
          <value key="ui_button">False</value>
          <value key="ui_dialog">False</value>
          <value key="ui_slider">False</value>
          <value key="ui_tabs">False</value>
          <value key="ui_datepicker">False</value>
          <value key="ui_progressbar">False</value>
          <value key="effects_core">False</value>
          <value key="effects_blind">False</value>
          <value key="effects_bounce">False</value>
          <value key="effects_clip">False</value>
          <value key="effects_drop">False</value>
          <value key="effects_explode">False</value>
          <value key="effects_fade">False</value>
          <value key="effects_fold">False</value>
          <value key="effects_highlight">False</value>
          <value key="effects_pulsate">False</value>
          <value key="effects_scale">False</value>
          <value key="effects_shake">False</value>
          <value key="effects_slide">False</value>
          <value key="effects_transfer">False</value>
        </records>
        <records interface="collective.js.jqueryui.controlpanel.IJQueryUICSS">
          <value key="css">False</value>
          <value key="patch">False</value>
        </records>
    </registry>

Using the control panel, you can select plugins you want. If you unselect a
plugin it will be unactivated (but not its dependencies)

Using python, you just have to use plone.registry api:

::

    from zope.component import getUtility
    from plone.registry.interfaces import IRegistry
    from collective.js.jqueryui.config import DEPS
    from collective.js.jqueryui.interfaces import IJQueryUICSS, IJQueryUIPlugins
    #is plone.app.registry
    registry = getUtility(IRegistry)
    proxy = registry.forInterface(IJQueryUIPlugins)
    setattr(proxy, 'ui_draggable', True)
    setattr(proxy, 'ui_droppable', True)


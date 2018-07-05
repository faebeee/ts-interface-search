# ts-interface-search

## Install

    npm i ts-interface-search -g

## Usage
Simple search for an interface name

    ➜ interface-search IAbstractPlugin

will give you an output like this

    description: Abstract interface for a plugin
    type:        object
    properties:
    type:
        type: string
    plugins:
        type:  array
        items:
        $ref: #/definitions/IAbstractPlugin
    content:
        $ref: #/definitions/IAbstractPluginContent
    required:
    - content
    - type
    definitions:
    IAbstractPlugin:
        description: Abstract interface for a plugin
        type:        object
        properties:
        type:
            type: string
        plugins:
            type:  array
            items:
            $ref: #/definitions/IAbstractPlugin
        content:
            $ref: #/definitions/IAbstractPluginContent
        required:
        - content
        - type
    IAbstractPluginContent:
        description:          Abstract interface for a plugin content
        type:                 object
        additionalProperties:
    $schema:     http://json-schema.org/draft-06/schema#

by adding `--ext` you'll get informations about referenced interfaces.

    ➜ interface-search IBranch --ext

Output

    type:        object
    properties:
    id:
        type: number
    address:
        type: string
    phone:
        type: string
    longitude:
        type: number
    latitude:
        type: number
    name:
        type: string
    mail:
        type: string
    country_ids:
        type:  array
        items:
        type: number
    representation_labels:
        $ref: #/definitions/IRepresentationLabels
    countries:
        type:  array
        items:
        $ref: #/definitions/ICountry
    address_country:
        $ref: #/definitions/ICountry
    required:
    - address
    - address_country
    - countries
    - id
    - latitude
    - longitude
    - mail
    - name
    - phone
    - representation_labels
    definitions:
    IRepresentationLabels:
        type:       object
        properties:
        toggle_label:
            type: string
        title:
            type: string
        required:
        - title
        - toggle_label
    ICountry:
        type:       object
        properties:
        id:
            type: number
        label:
            type: string
        search:
            type: string
        required:
        - id
        - label
    $schema:     http://json-schema.org/draft-06/schema#
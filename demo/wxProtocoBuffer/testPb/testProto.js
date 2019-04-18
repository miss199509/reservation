/**
 * Created by zhangmiao on 2018/3/18.
 */

module.exports = {
    "options": {
        "java_package": "com.google.apps.jspb.proto",
        "java_multiple_files": true
    },
    "nested": {
        "jspb": {
            "nested": {
                "test": {
                    "nested": {
                        "Empty": {
                            "fields": {}
                        },
                        "OuterEnum": {
                            "values": {
                                "FOO": 1,
                                "BAR": 2
                            }
                        },
                        "EnumContainer": {
                            "fields": {
                                "outerEnum": {
                                    "type": "OuterEnum",
                                    "id": 1
                                }
                            }
                        },
                        "Simple1": {
                            "fields": {
                                "aString": {
                                    "rule": "required",
                                    "type": "string",
                                    "id": 1
                                },
                                "aRepeatedString": {
                                    "rule": "repeated",
                                    "type": "string",
                                    "id": 2
                                },
                                "aBoolean": {
                                    "type": "bool",
                                    "id": 3
                                }
                            }
                        },
                        "Simple2": {
                            "fields": {
                                "aString": {
                                    "rule": "required",
                                    "type": "string",
                                    "id": 1
                                },
                                "aRepeatedString": {
                                    "rule": "repeated",
                                    "type": "string",
                                    "id": 2
                                }
                            }
                        },
                        "SpecialCases": {
                            "fields": {
                                "normal": {
                                    "rule": "required",
                                    "type": "string",
                                    "id": 1
                                },
                                "default": {
                                    "rule": "required",
                                    "type": "string",
                                    "id": 2
                                },
                                "function": {
                                    "rule": "required",
                                    "type": "string",
                                    "id": 3
                                },
                                "var": {
                                    "rule": "required",
                                    "type": "string",
                                    "id": 4
                                }
                            }
                        },
                        "OptionalFields": {
                            "fields": {
                                "aString": {
                                    "type": "string",
                                    "id": 1
                                },
                                "aBool": {
                                    "rule": "required",
                                    "type": "bool",
                                    "id": 2
                                },
                                "aNestedMessage": {
                                    "type": "Nested",
                                    "id": 3
                                },
                                "aRepeatedMessage": {
                                    "rule": "repeated",
                                    "type": "Nested",
                                    "id": 4
                                },
                                "aRepeatedString": {
                                    "rule": "repeated",
                                    "type": "string",
                                    "id": 5
                                }
                            },
                            "nested": {
                                "Nested": {
                                    "fields": {
                                        "anInt": {
                                            "type": "int32",
                                            "id": 1
                                        }
                                    }
                                }
                            }
                        },
                        "HasExtensions": {
                            "fields": {
                                "str1": {
                                    "type": "string",
                                    "id": 1
                                },
                                "str2": {
                                    "type": "string",
                                    "id": 2
                                },
                                "str3": {
                                    "type": "string",
                                    "id": 3
                                }
                            },
                            "extensions": [
                                [
                                    10,
                                    536870911
                                ]
                            ]
                        },
                        "Complex": {
                            "fields": {
                                "aString": {
                                    "rule": "required",
                                    "type": "string",
                                    "id": 1
                                },
                                "anOutOfOrderBool": {
                                    "rule": "required",
                                    "type": "bool",
                                    "id": 9
                                },
                                "aNestedMessage": {
                                    "type": "Nested",
                                    "id": 4
                                },
                                "aRepeatedMessage": {
                                    "rule": "repeated",
                                    "type": "Nested",
                                    "id": 5
                                },
                                "aRepeatedString": {
                                    "rule": "repeated",
                                    "type": "string",
                                    "id": 7
                                }
                            },
                            "nested": {
                                "Nested": {
                                    "fields": {
                                        "anInt": {
                                            "rule": "required",
                                            "type": "int32",
                                            "id": 2
                                        }
                                    }
                                }
                            }
                        },
                        "OuterMessage": {
                            "fields": {},
                            "nested": {
                                "Complex": {
                                    "fields": {
                                        "innerComplexField": {
                                            "type": "int32",
                                            "id": 1
                                        }
                                    }
                                }
                            }
                        },
                        "IsExtension": {
                            "fields": {
                                "ext1": {
                                    "type": "string",
                                    "id": 1
                                }
                            },
                            "nested": {
                                "extField": {
                                    "type": "IsExtension",
                                    "id": 100,
                                    "extend": "HasExtensions"
                                },
                                "simpleOption": {
                                    "type": "string",
                                    "id": 42113038,
                                    "extend": "google.protobuf.EnumOptions"
                                }
                            }
                        },
                        "IndirectExtension": {
                            "fields": {},
                            "nested": {
                                "simple": {
                                    "type": "Simple1",
                                    "id": 101,
                                    "extend": "HasExtensions"
                                },
                                "str": {
                                    "type": "string",
                                    "id": 102,
                                    "extend": "HasExtensions"
                                },
                                "repeatedStr": {
                                    "rule": "repeated",
                                    "type": "string",
                                    "id": 103,
                                    "extend": "HasExtensions"
                                },
                                "repeatedSimple": {
                                    "rule": "repeated",
                                    "type": "Simple1",
                                    "id": 104,
                                    "extend": "HasExtensions"
                                }
                            }
                        },
                        "simple1": {
                            "type": "Simple1",
                            "id": 105,
                            "extend": "HasExtensions"
                        },
                        "DefaultValues": {
                            "fields": {
                                "stringField": {
                                    "type": "string",
                                    "id": 1,
                                    "options": {
                                        "default": "default<>\'\"abc"
                                    }
                                },
                                "boolField": {
                                    "type": "bool",
                                    "id": 2,
                                    "options": {
                                        "default": true
                                    }
                                },
                                "intField": {
                                    "type": "int64",
                                    "id": 3,
                                    "options": {
                                        "default": 11
                                    }
                                },
                                "enumField": {
                                    "type": "Enum",
                                    "id": 4,
                                    "options": {
                                        "default": "E1"
                                    }
                                },
                                "emptyField": {
                                    "type": "string",
                                    "id": 6,
                                    "options": {
                                        "default": ""
                                    }
                                },
                                "bytesField": {
                                    "type": "bytes",
                                    "id": 8,
                                    "options": {
                                        "default": "moo"
                                    }
                                }
                            },
                            "nested": {
                                "Enum": {
                                    "values": {
                                        "E1": 13,
                                        "E2": 77
                                    }
                                }
                            }
                        },
                        "FloatingPointFields": {
                            "fields": {
                                "optionalFloatField": {
                                    "type": "float",
                                    "id": 1
                                },
                                "requiredFloatField": {
                                    "rule": "required",
                                    "type": "float",
                                    "id": 2
                                },
                                "repeatedFloatField": {
                                    "rule": "repeated",
                                    "type": "float",
                                    "id": 3,
                                    "options": {
                                        "packed": false
                                    }
                                },
                                "defaultFloatField": {
                                    "type": "float",
                                    "id": 4,
                                    "options": {
                                        "default": 2
                                    }
                                },
                                "optionalDoubleField": {
                                    "type": "double",
                                    "id": 5
                                },
                                "requiredDoubleField": {
                                    "rule": "required",
                                    "type": "double",
                                    "id": 6
                                },
                                "repeatedDoubleField": {
                                    "rule": "repeated",
                                    "type": "double",
                                    "id": 7,
                                    "options": {
                                        "packed": false
                                    }
                                },
                                "defaultDoubleField": {
                                    "type": "double",
                                    "id": 8,
                                    "options": {
                                        "default": 2
                                    }
                                }
                            }
                        },
                        "TestClone": {
                            "fields": {
                                "str": {
                                    "type": "string",
                                    "id": 1
                                },
                                "simple1": {
                                    "type": "Simple1",
                                    "id": 3
                                },
                                "simple2": {
                                    "rule": "repeated",
                                    "type": "Simple1",
                                    "id": 5
                                },
                                "bytesField": {
                                    "type": "bytes",
                                    "id": 6
                                },
                                "unused": {
                                    "type": "string",
                                    "id": 7
                                }
                            },
                            "extensions": [
                                [
                                    10,
                                    536870911
                                ]
                            ]
                        },
                        "CloneExtension": {
                            "fields": {
                                "ext": {
                                    "type": "string",
                                    "id": 2
                                }
                            },
                            "nested": {
                                "extField": {
                                    "type": "CloneExtension",
                                    "id": 100,
                                    "extend": "TestClone"
                                }
                            }
                        },
                        "TestGroup": {
                            "fields": {
                                "repeatedGroup": {
                                    "rule": "repeated",
                                    "type": "RepeatedGroup",
                                    "id": 1
                                },
                                "requiredGroup": {
                                    "rule": "required",
                                    "type": "RequiredGroup",
                                    "id": 2
                                },
                                "optionalGroup": {
                                    "type": "OptionalGroup",
                                    "id": 3
                                },
                                "id": {
                                    "type": "string",
                                    "id": 4
                                },
                                "requiredSimple": {
                                    "rule": "required",
                                    "type": "Simple2",
                                    "id": 5
                                },
                                "optionalSimple": {
                                    "type": "Simple2",
                                    "id": 6
                                }
                            },
                            "nested": {
                                "RepeatedGroup": {
                                    "fields": {
                                        "id": {
                                            "rule": "required",
                                            "type": "string",
                                            "id": 1
                                        },
                                        "someBool": {
                                            "rule": "repeated",
                                            "type": "bool",
                                            "id": 2,
                                            "options": {
                                                "packed": false
                                            }
                                        }
                                    },
                                    "group": true
                                },
                                "RequiredGroup": {
                                    "fields": {
                                        "id": {
                                            "rule": "required",
                                            "type": "string",
                                            "id": 1
                                        }
                                    },
                                    "group": true
                                },
                                "OptionalGroup": {
                                    "fields": {
                                        "id": {
                                            "rule": "required",
                                            "type": "string",
                                            "id": 1
                                        }
                                    },
                                    "group": true
                                }
                            }
                        },
                        "TestGroup1": {
                            "fields": {
                                "group": {
                                    "type": "TestGroup.RepeatedGroup",
                                    "id": 1
                                }
                            }
                        },
                        "TestReservedNames": {
                            "fields": {
                                "extension": {
                                    "type": "int32",
                                    "id": 1
                                }
                            },
                            "extensions": [
                                [
                                    10,
                                    536870911
                                ]
                            ]
                        },
                        "TestReservedNamesExtension": {
                            "fields": {},
                            "nested": {
                                "foo": {
                                    "type": "int32",
                                    "id": 10,
                                    "extend": "TestReservedNames"
                                }
                            }
                        },
                        "TestMessageWithOneof": {
                            "oneofs": {
                                "partialOneof": {
                                    "oneof": [
                                        "pone",
                                        "pthree"
                                    ]
                                },
                                "recursiveOneof": {
                                    "oneof": [
                                        "rone",
                                        "rtwo"
                                    ]
                                },
                                "defaultOneofA": {
                                    "oneof": [
                                        "aone",
                                        "atwo"
                                    ]
                                },
                                "defaultOneofB": {
                                    "oneof": [
                                        "bone",
                                        "btwo"
                                    ]
                                }
                            },
                            "fields": {
                                "pone": {
                                    "type": "string",
                                    "id": 3
                                },
                                "pthree": {
                                    "type": "string",
                                    "id": 5
                                },
                                "rone": {
                                    "type": "TestMessageWithOneof",
                                    "id": 6
                                },
                                "rtwo": {
                                    "type": "string",
                                    "id": 7
                                },
                                "normalField": {
                                    "type": "bool",
                                    "id": 8
                                },
                                "repeatedField": {
                                    "rule": "repeated",
                                    "type": "string",
                                    "id": 9
                                },
                                "aone": {
                                    "type": "int32",
                                    "id": 10,
                                    "options": {
                                        "default": 1234
                                    }
                                },
                                "atwo": {
                                    "type": "int32",
                                    "id": 11
                                },
                                "bone": {
                                    "type": "int32",
                                    "id": 12
                                },
                                "btwo": {
                                    "type": "int32",
                                    "id": 13,
                                    "options": {
                                        "default": 1234
                                    }
                                }
                            }
                        },
                        "TestEndsWithBytes": {
                            "fields": {
                                "value": {
                                    "type": "int32",
                                    "id": 1
                                },
                                "data": {
                                    "type": "bytes",
                                    "id": 2
                                }
                            }
                        },
                        "Int64Types": {
                            "fields": {
                                "int64Normal": {
                                    "type": "int64",
                                    "id": 1,
                                    "options": {
                                        "jstype": "JS_NORMAL"
                                    }
                                },
                                "int64String": {
                                    "type": "sint64",
                                    "id": 2,
                                    "options": {
                                        "jstype": "JS_STRING"
                                    }
                                },
                                "int64Number": {
                                    "type": "uint64",
                                    "id": 3,
                                    "options": {
                                        "jstype": "JS_NUMBER"
                                    }
                                }
                            }
                        },
                        "TestMapFieldsNoBinary": {
                            "fields": {
                                "mapStringString": {
                                    "keyType": "string",
                                    "type": "string",
                                    "id": 1
                                },
                                "mapStringInt32": {
                                    "keyType": "string",
                                    "type": "int32",
                                    "id": 2
                                },
                                "mapStringInt64": {
                                    "keyType": "string",
                                    "type": "int64",
                                    "id": 3
                                },
                                "mapStringBool": {
                                    "keyType": "string",
                                    "type": "bool",
                                    "id": 4
                                },
                                "mapStringDouble": {
                                    "keyType": "string",
                                    "type": "double",
                                    "id": 5
                                },
                                "mapStringEnum": {
                                    "keyType": "string",
                                    "type": "MapValueEnumNoBinary",
                                    "id": 6
                                },
                                "mapStringMsg": {
                                    "keyType": "string",
                                    "type": "MapValueMessageNoBinary",
                                    "id": 7
                                },
                                "mapInt32String": {
                                    "keyType": "int32",
                                    "type": "string",
                                    "id": 8
                                },
                                "mapInt64String": {
                                    "keyType": "int64",
                                    "type": "string",
                                    "id": 9
                                },
                                "mapBoolString": {
                                    "keyType": "bool",
                                    "type": "string",
                                    "id": 10
                                },
                                "testMapFields": {
                                    "type": "TestMapFieldsNoBinary",
                                    "id": 11
                                },
                                "mapStringTestmapfields": {
                                    "keyType": "string",
                                    "type": "TestMapFieldsNoBinary",
                                    "id": 12
                                }
                            }
                        },
                        "MapValueEnumNoBinary": {
                            "values": {
                                "MAP_VALUE_FOO_NOBINARY": 0,
                                "MAP_VALUE_BAR_NOBINARY": 1,
                                "MAP_VALUE_BAZ_NOBINARY": 2
                            }
                        },
                        "MapValueMessageNoBinary": {
                            "fields": {
                                "foo": {
                                    "type": "int32",
                                    "id": 1
                                }
                            }
                        },
                        "Deeply": {
                            "fields": {},
                            "nested": {
                                "Nested": {
                                    "fields": {},
                                    "nested": {
                                        "Message": {
                                            "fields": {
                                                "count": {
                                                    "type": "int32",
                                                    "id": 1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "google": {
            "nested": {
                "protobuf": {
                    "nested": {
                        "FileDescriptorSet": {
                            "fields": {
                                "file": {
                                    "rule": "repeated",
                                    "type": "FileDescriptorProto",
                                    "id": 1
                                }
                            }
                        },
                        "FileDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "package": {
                                    "type": "string",
                                    "id": 2
                                },
                                "dependency": {
                                    "rule": "repeated",
                                    "type": "string",
                                    "id": 3
                                },
                                "publicDependency": {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "id": 10,
                                    "options": {
                                        "packed": false
                                    }
                                },
                                "weakDependency": {
                                    "rule": "repeated",
                                    "type": "int32",
                                    "id": 11,
                                    "options": {
                                        "packed": false
                                    }
                                },
                                "messageType": {
                                    "rule": "repeated",
                                    "type": "DescriptorProto",
                                    "id": 4
                                },
                                "enumType": {
                                    "rule": "repeated",
                                    "type": "EnumDescriptorProto",
                                    "id": 5
                                },
                                "service": {
                                    "rule": "repeated",
                                    "type": "ServiceDescriptorProto",
                                    "id": 6
                                },
                                "extension": {
                                    "rule": "repeated",
                                    "type": "FieldDescriptorProto",
                                    "id": 7
                                },
                                "options": {
                                    "type": "FileOptions",
                                    "id": 8
                                },
                                "sourceCodeInfo": {
                                    "type": "SourceCodeInfo",
                                    "id": 9
                                },
                                "syntax": {
                                    "type": "string",
                                    "id": 12
                                }
                            }
                        },
                        "DescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "field": {
                                    "rule": "repeated",
                                    "type": "FieldDescriptorProto",
                                    "id": 2
                                },
                                "extension": {
                                    "rule": "repeated",
                                    "type": "FieldDescriptorProto",
                                    "id": 6
                                },
                                "nestedType": {
                                    "rule": "repeated",
                                    "type": "DescriptorProto",
                                    "id": 3
                                },
                                "enumType": {
                                    "rule": "repeated",
                                    "type": "EnumDescriptorProto",
                                    "id": 4
                                },
                                "extensionRange": {
                                    "rule": "repeated",
                                    "type": "ExtensionRange",
                                    "id": 5
                                },
                                "oneofDecl": {
                                    "rule": "repeated",
                                    "type": "OneofDescriptorProto",
                                    "id": 8
                                },
                                "options": {
                                    "type": "MessageOptions",
                                    "id": 7
                                },
                                "reservedRange": {
                                    "rule": "repeated",
                                    "type": "ReservedRange",
                                    "id": 9
                                },
                                "reservedName": {
                                    "rule": "repeated",
                                    "type": "string",
                                    "id": 10
                                }
                            },
                            "nested": {
                                "ExtensionRange": {
                                    "fields": {
                                        "start": {
                                            "type": "int32",
                                            "id": 1
                                        },
                                        "end": {
                                            "type": "int32",
                                            "id": 2
                                        }
                                    }
                                },
                                "ReservedRange": {
                                    "fields": {
                                        "start": {
                                            "type": "int32",
                                            "id": 1
                                        },
                                        "end": {
                                            "type": "int32",
                                            "id": 2
                                        }
                                    }
                                }
                            }
                        },
                        "FieldDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "number": {
                                    "type": "int32",
                                    "id": 3
                                },
                                "label": {
                                    "type": "Label",
                                    "id": 4
                                },
                                "type": {
                                    "type": "Type",
                                    "id": 5
                                },
                                "typeName": {
                                    "type": "string",
                                    "id": 6
                                },
                                "extendee": {
                                    "type": "string",
                                    "id": 2
                                },
                                "defaultValue": {
                                    "type": "string",
                                    "id": 7
                                },
                                "oneofIndex": {
                                    "type": "int32",
                                    "id": 9
                                },
                                "jsonName": {
                                    "type": "string",
                                    "id": 10
                                },
                                "options": {
                                    "type": "FieldOptions",
                                    "id": 8
                                }
                            },
                            "nested": {
                                "Type": {
                                    "values": {
                                        "TYPE_DOUBLE": 1,
                                        "TYPE_FLOAT": 2,
                                        "TYPE_INT64": 3,
                                        "TYPE_UINT64": 4,
                                        "TYPE_INT32": 5,
                                        "TYPE_FIXED64": 6,
                                        "TYPE_FIXED32": 7,
                                        "TYPE_BOOL": 8,
                                        "TYPE_STRING": 9,
                                        "TYPE_GROUP": 10,
                                        "TYPE_MESSAGE": 11,
                                        "TYPE_BYTES": 12,
                                        "TYPE_UINT32": 13,
                                        "TYPE_ENUM": 14,
                                        "TYPE_SFIXED32": 15,
                                        "TYPE_SFIXED64": 16,
                                        "TYPE_SINT32": 17,
                                        "TYPE_SINT64": 18
                                    }
                                },
                                "Label": {
                                    "values": {
                                        "LABEL_OPTIONAL": 1,
                                        "LABEL_REQUIRED": 2,
                                        "LABEL_REPEATED": 3
                                    }
                                }
                            }
                        },
                        "OneofDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "options": {
                                    "type": "OneofOptions",
                                    "id": 2
                                }
                            }
                        },
                        "EnumDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "value": {
                                    "rule": "repeated",
                                    "type": "EnumValueDescriptorProto",
                                    "id": 2
                                },
                                "options": {
                                    "type": "EnumOptions",
                                    "id": 3
                                }
                            }
                        },
                        "EnumValueDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "number": {
                                    "type": "int32",
                                    "id": 2
                                },
                                "options": {
                                    "type": "EnumValueOptions",
                                    "id": 3
                                }
                            }
                        },
                        "ServiceDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "method": {
                                    "rule": "repeated",
                                    "type": "MethodDescriptorProto",
                                    "id": 2
                                },
                                "options": {
                                    "type": "ServiceOptions",
                                    "id": 3
                                }
                            }
                        },
                        "MethodDescriptorProto": {
                            "fields": {
                                "name": {
                                    "type": "string",
                                    "id": 1
                                },
                                "inputType": {
                                    "type": "string",
                                    "id": 2
                                },
                                "outputType": {
                                    "type": "string",
                                    "id": 3
                                },
                                "options": {
                                    "type": "MethodOptions",
                                    "id": 4
                                },
                                "clientStreaming": {
                                    "type": "bool",
                                    "id": 5
                                },
                                "serverStreaming": {
                                    "type": "bool",
                                    "id": 6
                                }
                            }
                        },
                        "FileOptions": {
                            "fields": {
                                "javaPackage": {
                                    "type": "string",
                                    "id": 1
                                },
                                "javaOuterClassname": {
                                    "type": "string",
                                    "id": 8
                                },
                                "javaMultipleFiles": {
                                    "type": "bool",
                                    "id": 10
                                },
                                "javaGenerateEqualsAndHash": {
                                    "type": "bool",
                                    "id": 20,
                                    "options": {
                                        "deprecated": true
                                    }
                                },
                                "javaStringCheckUtf8": {
                                    "type": "bool",
                                    "id": 27
                                },
                                "optimizeFor": {
                                    "type": "OptimizeMode",
                                    "id": 9,
                                    "options": {
                                        "default": "SPEED"
                                    }
                                },
                                "goPackage": {
                                    "type": "string",
                                    "id": 11
                                },
                                "ccGenericServices": {
                                    "type": "bool",
                                    "id": 16
                                },
                                "javaGenericServices": {
                                    "type": "bool",
                                    "id": 17
                                },
                                "pyGenericServices": {
                                    "type": "bool",
                                    "id": 18
                                },
                                "deprecated": {
                                    "type": "bool",
                                    "id": 23
                                },
                                "ccEnableArenas": {
                                    "type": "bool",
                                    "id": 31
                                },
                                "objcClassPrefix": {
                                    "type": "string",
                                    "id": 36
                                },
                                "csharpNamespace": {
                                    "type": "string",
                                    "id": 37
                                },
                                "uninterpretedOption": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ],
                            "reserved": [
                                [
                                    38,
                                    38
                                ]
                            ],
                            "nested": {
                                "OptimizeMode": {
                                    "values": {
                                        "SPEED": 1,
                                        "CODE_SIZE": 2,
                                        "LITE_RUNTIME": 3
                                    }
                                }
                            }
                        },
                        "MessageOptions": {
                            "fields": {
                                "messageSetWireFormat": {
                                    "type": "bool",
                                    "id": 1
                                },
                                "noStandardDescriptorAccessor": {
                                    "type": "bool",
                                    "id": 2
                                },
                                "deprecated": {
                                    "type": "bool",
                                    "id": 3
                                },
                                "mapEntry": {
                                    "type": "bool",
                                    "id": 7
                                },
                                "uninterpretedOption": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ],
                            "reserved": [
                                [
                                    8,
                                    8
                                ]
                            ]
                        },
                        "FieldOptions": {
                            "fields": {
                                "ctype": {
                                    "type": "CType",
                                    "id": 1,
                                    "options": {
                                        "default": "STRING"
                                    }
                                },
                                "packed": {
                                    "type": "bool",
                                    "id": 2
                                },
                                "jstype": {
                                    "type": "JSType",
                                    "id": 6,
                                    "options": {
                                        "default": "JS_NORMAL"
                                    }
                                },
                                "lazy": {
                                    "type": "bool",
                                    "id": 5
                                },
                                "deprecated": {
                                    "type": "bool",
                                    "id": 3
                                },
                                "weak": {
                                    "type": "bool",
                                    "id": 10
                                },
                                "uninterpretedOption": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ],
                            "reserved": [
                                [
                                    4,
                                    4
                                ]
                            ],
                            "nested": {
                                "CType": {
                                    "values": {
                                        "STRING": 0,
                                        "CORD": 1,
                                        "STRING_PIECE": 2
                                    }
                                },
                                "JSType": {
                                    "values": {
                                        "JS_NORMAL": 0,
                                        "JS_STRING": 1,
                                        "JS_NUMBER": 2
                                    }
                                }
                            }
                        },
                        "OneofOptions": {
                            "fields": {
                                "uninterpretedOption": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ]
                        },
                        "EnumOptions": {
                            "fields": {
                                "allowAlias": {
                                    "type": "bool",
                                    "id": 2
                                },
                                "deprecated": {
                                    "type": "bool",
                                    "id": 3
                                },
                                "uninterpretedOption": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ]
                        },
                        "EnumValueOptions": {
                            "fields": {
                                "deprecated": {
                                    "type": "bool",
                                    "id": 1
                                },
                                "uninterpretedOption": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ]
                        },
                        "ServiceOptions": {
                            "fields": {
                                "deprecated": {
                                    "type": "bool",
                                    "id": 33
                                },
                                "uninterpretedOption": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ]
                        },
                        "MethodOptions": {
                            "fields": {
                                "deprecated": {
                                    "type": "bool",
                                    "id": 33
                                },
                                "uninterpretedOption": {
                                    "rule": "repeated",
                                    "type": "UninterpretedOption",
                                    "id": 999
                                }
                            },
                            "extensions": [
                                [
                                    1000,
                                    536870911
                                ]
                            ]
                        },
                        "UninterpretedOption": {
                            "fields": {
                                "name": {
                                    "rule": "repeated",
                                    "type": "NamePart",
                                    "id": 2
                                },
                                "identifierValue": {
                                    "type": "string",
                                    "id": 3
                                },
                                "positiveIntValue": {
                                    "type": "uint64",
                                    "id": 4
                                },
                                "negativeIntValue": {
                                    "type": "int64",
                                    "id": 5
                                },
                                "doubleValue": {
                                    "type": "double",
                                    "id": 6
                                },
                                "stringValue": {
                                    "type": "bytes",
                                    "id": 7
                                },
                                "aggregateValue": {
                                    "type": "string",
                                    "id": 8
                                }
                            },
                            "nested": {
                                "NamePart": {
                                    "fields": {
                                        "namePart": {
                                            "rule": "required",
                                            "type": "string",
                                            "id": 1
                                        },
                                        "isExtension": {
                                            "rule": "required",
                                            "type": "bool",
                                            "id": 2
                                        }
                                    }
                                }
                            }
                        },
                        "SourceCodeInfo": {
                            "fields": {
                                "location": {
                                    "rule": "repeated",
                                    "type": "Location",
                                    "id": 1
                                }
                            },
                            "nested": {
                                "Location": {
                                    "fields": {
                                        "path": {
                                            "rule": "repeated",
                                            "type": "int32",
                                            "id": 1
                                        },
                                        "span": {
                                            "rule": "repeated",
                                            "type": "int32",
                                            "id": 2
                                        },
                                        "leadingComments": {
                                            "type": "string",
                                            "id": 3
                                        },
                                        "trailingComments": {
                                            "type": "string",
                                            "id": 4
                                        },
                                        "leadingDetachedComments": {
                                            "rule": "repeated",
                                            "type": "string",
                                            "id": 6
                                        }
                                    }
                                }
                            }
                        },
                        "GeneratedCodeInfo": {
                            "fields": {
                                "annotation": {
                                    "rule": "repeated",
                                    "type": "Annotation",
                                    "id": 1
                                }
                            },
                            "nested": {
                                "Annotation": {
                                    "fields": {
                                        "path": {
                                            "rule": "repeated",
                                            "type": "int32",
                                            "id": 1
                                        },
                                        "sourceFile": {
                                            "type": "string",
                                            "id": 2
                                        },
                                        "begin": {
                                            "type": "int32",
                                            "id": 3
                                        },
                                        "end": {
                                            "type": "int32",
                                            "id": 4
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

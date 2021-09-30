from decimal import Decimal
import json
import boto3
import sys

todo=sys.argv[1]


def load_rules(todol, dynamodb=None):
    if not dynamodb:
        dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table('Todos')
    table.put_item(Item={"text":todol})


if __name__ == '__main__':
    
    load_rules(todo)
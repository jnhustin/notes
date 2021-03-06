""" PRINT MULTIPLE LINE COMMENTS CLEANLY
  * note the use of a tupe
  * note that there are no commas
  * pros
    * better than the \ multi-line method because the \ conserves indenting whereas the tuple method does not
  * cons
    * requ'res you to declare your own \n
"""
multi_line_tuple = (
  "line 1\n"
  "line 2\n"
  "line 3\n"
)
print(multi_line_tuple)
""" READ FROM A .ENV FILE
  * pip install python-dotenv
"""
from dotenv  import load_dotenv
from os.path import join, dirname
dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)
""" programmatic acces to SSM Resource
  * have your aws cli creds in your ~/aws/credentials file
"""
def get_variable(variable_name_in_ssm: str):
  ssm_client     =  boto3.client('ssm', region_name='us-west-2')
  variable : str =  ssm_client
    .get_parameter(Name=variable_name_in_ssm,WithDecryption=True)
    .get('Parameter')
    .get('Value')
  return variable
""" get multiDict values from query params
  * how get the email and uuid value from this qs: `/api/profile_details?desired_details=email&desired_details=uuid`
"""
# flask
query_string : Dict = request.args.getlist('desired_details')
